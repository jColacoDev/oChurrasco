import './FileUpload.scss'
import React, {useState, useMemo, useContext, useEffect} from 'react'
import Resizer from "react-image-file-resizer";
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import Image from '../Image';

export default function FileUpload({values, loading, setLoading, setValues}) {
    const {state} = useContext(AuthContext);
    const {images} = values;

    useEffect( () => {
        // console.log(values)
    },[])


    const resizeFile = (file) => new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            300,
            300,
            "JPEG",
            100,
            0,
            (uri) => {
                resolve(uri);
            },
            "base64"
        );
    });

    const fileResizeAndUpload = async (e) => {
        setLoading(true);

        try {
            const file = e.target.files[0];
            const image = await resizeFile(file);
            // console.log(image);
            axios.post(
                `${import.meta.env.VITE_REST_ENDPOINT}/uploadimages`,
                {image},
                {headers: {
                    authtoken: state.user.token
                }}
            )
            .then(response =>{
                setLoading(false);
                console.log('CLOUDINARY UPLOAD', response);
                setValues({...values, images: [...images, 
                    {...response.data,
                        label: values?.label || "", 
                        description: values?.description || ""
                    }
                ]})
            })
            .catch(error =>{
                setLoading(false);
                console.log('CLOUDINARY UPLOAD FAILED', error);
            })
          } catch (err) {
            console.log(err);
          }    
    };

    const handleImageRemove = (id) => {
        setLoading(true);

        axios.post(
                `${import.meta.env.VITE_REST_ENDPOINT}/removeimage`,
                {
                    public_id: id
                },
                {
                    headers: {
                        authtoken: state.user.token
                    }
                }
            )
            .then((response) => {
                setLoading(false);
                let filteredImages = images.filter((item) => {
                    return item.public_id !== id;
                });
                setValues({ ...values, images: filteredImages });
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    };

  return (
    <div className='FileUpload'>
        <section>
            <label className='uploadButton'>
                Upload Image
                <input
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={fileResizeAndUpload}
                    placeholder="Image"
                />
            </label> Or click on it to delete
        </section>
        <section className='images'>
            {images?.map((image) => (
                <Image key={image.public_id} 
                    className="image"
                    image={image}
                    handleImageRemove={handleImageRemove}
                />
            ))}
        </section>
    </div>
  )
}
