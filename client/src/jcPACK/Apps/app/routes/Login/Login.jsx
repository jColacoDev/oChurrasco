import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { googleAuthProvider, auth } from '../../../../firebase/firebase';
import { useMutation } from '@apollo/client';
import { USER_CREATE } from '../../../../graphql/mutations';

import SignInUp from '../../../../components/SignInUp/SignInUp';
import { appData } from '../../App';

const Login = () => {
    const { dispatch } = useContext(AuthContext);
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [loggedUser, setLoggedUser] = useState();
    const [nameInput, setNameInput] = useState('');
    const [loading, setLoading] = useState(false);
    

    const [userCreate] = useMutation(USER_CREATE, {

        onCompleted: () => console.log(`User Created`),
        onError: (err) => console.log(err.graphqQLError[0].message)
    });

    let navigate = useNavigate();

    useEffect(()=>{
        if(loggedUser){
            console.log(loggedUser);

            userCreate({variables: {
                input: {
                    email: loggedUser.email,
                    name: loggedUser.displayName,
                    images: [{
                        public_id: `google_${loggedUser.uid}`,
                        url: loggedUser.photoURL,
                        label: "googlePic"
                    }]
                }
            }});
            navigate(`${appData.path}/dashboard`);
        }
    },[loggedUser])

    const handleGoogleSignInClick = (e) => {
        e?.preventDefault();

        auth.signInWithPopup(googleAuthProvider)
        .then(async (result)=>{
            const idTokenResult = await result.user.getIdTokenResult();
            dispatch({
                type: 'LOGGED_IN_USER',
                payload: {
                    email: result.user.email,
                    token: idTokenResult.token
                }
            })
            console.log("auth.currentUser")
            console.log(auth.currentUser)
            setLoggedUser(auth.currentUser);
        })
    }

    const handleForgotSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const config= {
            url: import.meta.env.VITE_PASSWORD_FORGOT_REDIRECT,
            handleCodeInApp: true
        }
        await auth.sendPasswordResetEmail(emailInput, config).then(()=>{
            setEmailInput('');
            setLoading(false);
            toast.success(`Email is sent to ${emailInput}. Click on the link to reset your password`)
        }).catch(error => {
            console.log('error on password forgot email', error)
        })
    }
    const handleSignUpSubmit = async () => {
        setLoading(true);
             
        try {
            const result = await auth.createUserWithEmailAndPassword(emailInput, passwordInput);

            if (result.user.email) {
                // remove email from local storage
                let user = auth.currentUser;
                await user.updatePassword(passwordInput);
                // dispatch user with token and email
                const idTokenResult = await user.getIdTokenResult();
                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: {
                        email: user.email,
                        token: idTokenResult.token
                    }
                });
                
                // make api request to save/update user in mongodb
                userCreate({variables: {
                    input: {
                        // username: "Mongoose", 
                        name: nameInput, 
                        email: emailInput, 
                        password: passwordInput,
                    }
                }});
                // then redirect
                navigate(appData.path);
            }
        } catch (error) {
            console.log('register complete error', error.message);
            toast.error(error.message);
        }
        setLoading(false);
    }

    const handleSendSignInLinkToEmail = async () => {
        setLoading(true);
        let res = false;

        const config= {
            url: import.meta.env.VITE_CONFIRMATION_EMAIL_REDIRECT,
            handleCodeInApp: true
        }
        await auth.sendSignInLinkToEmail(emailInput, config)
        .then(() => {
            // show notification
            toast.success(`Email is sent to ${emailInput}. Click the link to complete registration.`)
            // save to local storage
            window.localStorage.setItem('emailForRegistration', emailInput);
            res= true;
        })
        .catch((error) => {
            toast.error('There was an error registering, please try again later')
            console.log(error);
            res= false;
        });

        setLoading(false);

        return res
    }
    const handleSignInSubmit = async () => {
        setLoading(true);
        try {
            await auth.signInWithEmailAndPassword(emailInput, passwordInput).then(async (result) => {
                const { user } = result;
                const idTokenResult = await user.getIdTokenResult();

                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: { email: user.email, token: idTokenResult.token }
                });

                // send user info to our server mongodb to either update/create
                userCreate({variables: {
                    input: {
                        name: nameInput, 
                        email: emailInput, 
                        password: passwordInput
                    }
                }});
                navigate(`${appData.path}/dashboard`);
            });
        } catch (error) {
            console.log('login error', error);
            toast.error(error.message);
            setLoading(false);
        }
    };

    return (
        <div>
            <SignInUp 
                setNameInput={setNameInput}
                setEmailInput={setEmailInput}
                setPasswordInput={setPasswordInput}
                nameInput={nameInput}
                emailInput={emailInput}
                passwordInput={passwordInput}
                loading={loading}
                handleForgotSubmit={handleForgotSubmit}
                handleSignInSubmit={handleSignInSubmit}
                handleSignUpSubmit={handleSignUpSubmit}
                handleGoogleSignInClick={handleGoogleSignInClick}
            />
        </div>
    );
};

export default Login;
