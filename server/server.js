// Express
const express = require('express');
// Mongo DB
const mongoose = require('mongoose');
// Apollo
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
// graphQL
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')
const { loadFilesSync } = require('@graphql-tools/load-files')
// graphQL subscriptions
const { makeExecutableSchema } = require('@graphql-tools/schema');

const {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault,
  } = require("apollo-server-core");
const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');
const { PubSub } = require('graphql-subscriptions');

// custom middleware
const { authCheck } = require('./helpers/auth');
const { authCheckMiddleware } = require('./helpers/auth');
//utils
require('dotenv').config();
const cloudinary = require('cloudinary');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const fetch = require('node-fetch');
const { gDrive_authorize, gDrive_listFiles, getDriveDirectories } = require('./googleDrive/googleMethods');

(async () => {
    // express app
    const app = express();
    app.use(
        cors(),
        bodyParser.json({ limit: '10mb' })
    );

    /*******************************************************************/
    // Servers 
    /*******************************************************************/
    /***********************/
    // http server
    /***********************/
    const httpServer = http.createServer(app);
    /***********************/
    // graphql apollo server
    /***********************/
    const pubsub = new PubSub();

    const graphqlPath = '/graphql';
    const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, './graphql/typeDefs')));
    const resolvers = mergeResolvers(loadFilesSync(path.join(__dirname, './graphql/resolvers')));
    const schema = makeExecutableSchema({ typeDefs, resolvers });
    const apolloServer = new ApolloServer({
        schema,
        csrfPrevention: true,
        cache: "bounded",
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            {
            async serverWillStart() {
                return {
                async drainServer() {
                    await serverCleanup.dispose();
                },
                };
            },
            },
            ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
    });
    await apolloServer.start();
    // middlewares
    app.use(
        graphqlPath,
        expressMiddleware(apolloServer, {
            context: ({req}) => ({req, pubsub})
        }),
    );
    /***********************/
    // WebSocket server
    /***********************/
    const wsServer = new WebSocketServer({
        server: httpServer,
        path: graphqlPath,
    });
    const serverCleanup = useServer({
            schema,
            context: async () => ({pubsub})
        }, 
        wsServer
    );

    /*******************************************************************/
    // START Database
    /*******************************************************************/
    const startMongoDb = async (cloud = false) => {
        const db = cloud ? process.env.DATABASE_CLOUD : process.env.DATABASE;
        try{
            mongoose.set("strictQuery", false);
            const success = await mongoose.connect(db, {})
            
            console.log(`DB Connected:`)
            if(cloud) console.log(` cloud cluster0 mongoDB at Ergoface db`)
            else console.log(` local mongoDB at ${process.env.DATABASE}`)
            
        } catch (error){
            console.log('DB connection error',error)
        }
    };
    startMongoDb(false);

    /*******************************************************************/
    // Cloudinary Config
    /*******************************************************************/
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    })
    /*******************************************************************/
    // Cloud data service
    /*******************************************************************/

    const auth = await gDrive_authorize();
    const directories = await getDriveDirectories(auth, "Ergoface")
    
    /*******************************************************************/
    // REST endpoints
    /*******************************************************************/
    function timeout(delay) {
        return new Promise((res) => setTimeout(res, delay));
    }
    function fetchQuote(res){
        fetch("https://zenquotes.io/api/random")
        .then(async (response) => {
            const data = await response.json();
    
            if (data[0].a === "zenquotes.io") {
                await timeout(5000);
                fetchQuote(res);
            }else{
                res.send(JSON.stringify(data[0]));
            }
        })
        .catch((error) => {
            res.send("There was an error!", error);
        });
    }
    /***********************/
    // GET endpoints
    /***********************/
    app.get('/rest', function(req, res) {
        res.json({
            data: 'you hit rest endpoint great!'
        });
    });

    app.get("/quote", function (req, res) {
        fetchQuote(res);
    });

    // app.get("*", (req, res)=> {
    //     res.sendFile(path.join(__dirname, "../../public_html", "index.html"));
    // });
     
    /***********************/
    // POST endpoints
    /***********************/
    app.post("/recaptcha", (req, res) => {
        const token = req.body.token;
        const secret_key =  process.env.RECAPTCHA_SECRET_KEY;
        const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
       
        // Making POST request to verify captcha
        fetch(url, {method: "post"})
          .then((response) => response.json())
          .then((google_response) => {
            // google_response is the object return by
            // google as a response
            if (google_response.success == true) {
              //   if captcha is verified
              return res.json({ validation: true });
            } else {
              // if captcha is not verified
              return res.json({ validation: false });
            }
          })
          .catch((error) => {
              // Some error while verify captcha
            return res.json({ error });
          });
      });

    app.post('/removeimage', authCheckMiddleware, function(req, res) {
        let image_id = req.body.public_id;

        cloudinary.uploader.destroy(image_id, (error, result) => {
            if(error) return res.json({success: false, error});
            res.send('ok');
        });
    });
    app.post('/uploadimages', authCheckMiddleware, function(req, res) {
        console.log('...UPLOADING ...');
        console.log(req.body);
        cloudinary.uploader.upload(req.body.image, result => {
            res.send({
                url: result.secure_url,
                public_id: result.public_id,
            })
        },{
            public_id: `${Date.now()}`,
            resource_type: 'auto' 
        });
    });


    /*******************************************************************/
    // App listen
    /*******************************************************************/
    httpServer.listen(process.env.PORT, function() {
        console.log(`http server is ready at http://localhost:${process.env.PORT}`);
        console.log(`graphql server is ready at http://localhost:${process.env.PORT}${graphqlPath}`);
    });
    
})();
