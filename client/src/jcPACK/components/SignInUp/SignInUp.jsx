import './SignInUp.scss'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { AuthContext } from '../../context/authContext';
import { validateEmail } from '../../utils/utils';
import { useMutation } from '@apollo/client';
import { USER_CREATE } from '../../graphql/mutations';
import { appData } from '../../Apps/app/App';
// import googleButton from './../../../assets/images/login/googleButton.png'
const googleButton = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"

export default function SignInUp() {
    let navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const containerRef = useRef();
    const [recaptchaValidation, setRecaptchaValidation] = useState();

    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [errorInput, setErrorInput] = useState("");
    
    const [loggedUser, setLoggedUser] = useState();
    const [loading, setLoading] = useState(false);
    const [created, setCreated] = useState(false);
    const [forgot, setForgot] = useState(false);

    /***************************************************************** */
    /** Mutations ******************************************************** */
    const [userCreate] = useMutation(USER_CREATE, {
        onCompleted: () => console.info(`User Created`),
        onError: (err) => console.error(err.graphqQLError[0].message)
    });
    /***************************************************************** */
    /** Use effect ******************************************************** */
    useEffect(()=>{
        clearInputs();
    },[])

    useEffect(()=>{
        if(loggedUser){
            console.info(loggedUser);
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

    /***************************************************************** */
    /** Handlers ******************************************************** */
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
            console.error('register complete error', error.message);
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
            console.error('login error', error);
            toast.error(error.message);
            setLoading(false);
        }
    };
    /*////////////////////////////////////////////////*/
    /*/ input handlers  ******************************///*/
    function handleSignUpRecaptchaSubmit(e){
        e.preventDefault();
        if(checkInputs())handleReCaptchaVerify();
    }
    function handleSignInForgotSubmit(e){
        e.preventDefault();
        if(forgot)handleForgotSubmit(e);
        else handleSignInSubmit()
    }
    function handleForgotClick(e){
        e.preventDefault();
        setForgot(!forgot);
    }
    function handleSignToggleClick(e){
        e.preventDefault();
        const email= emailInput;
        clearInputs();
        if(created)setEmailInput(email)
        setCreated(false);
        containerRef.current.classList.toggle("right-panel-active")
    }
    function handleNameChange(event){
        setNameInput(event.target.value)
        if(errorInput === "name" && event.target.value)
            setErrorInput("");
    }
    function handleEmailChange(event){
        setEmailInput(event.target.value)
        if(errorInput === "email" && event.target.value)
            setErrorInput("");
    }
    function handlePasswordChange(event){
        setPasswordInput(event.target.value)
        if(errorInput === "password" && event.target.value)
            setErrorInput("");
    }

    /*////////////////////////////////////////////////*/
    /*/ Recaptcha ******************************///*/
    
    function fetchRecaptchaTokenVerify(token) {
        fetch(`${import.meta.env.VITE_REST_ENDPOINT}/recaptcha`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
        })
        .then(async (response) => {
            setRecaptchaValidation(await response.json().then(body => body.validation));
            return response
        })
        .catch((error) => {
            return error
        });
    }
    const { executeRecaptcha } = useGoogleReCaptcha();
    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
        }
        const token = await executeRecaptcha('SignUp');
        fetchRecaptchaTokenVerify(token)
    }, [executeRecaptcha]);
    useEffect(() => {
        if(recaptchaValidation && errorInput ===""){
            handleSignUpSubmit()
            .then((res)=>{
                // console.log(res)
                if(res){
                    setCreated(true);
                }
            })
            setRecaptchaValidation(false)
        };
    }, [recaptchaValidation]);

    /*////////////////////////////////////////////////*/
    /*////////////////////////////////////////////////*/

    function clearInputs(){
        setEmailInput("");
        setPasswordInput("");
        setNameInput("");
        setErrorInput("")
        setForgot(false);
    }
    function checkInputs() {
        let flag = "";
        if(nameInput.trim() === "")
            flag="name";
        else if(!validateEmail(emailInput))
            flag="email";
        else if(passwordInput.trim().length < 6)
            flag="password";
        else flag="";
        setErrorInput(flag);
        return flag === "" ? true : false;
    }
  return (
<div className='SignInUp'>
    <div ref={containerRef} className="container" id="container">
        <div className="form-container sign-up-container">
            <form onSubmit={handleSignUpRecaptchaSubmit}>
                <h1>Create Account</h1>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={nameInput}
                    onChange={handleNameChange}
                    disabled={loading || created}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={emailInput}
                    onChange={handleEmailChange}
                    disabled={loading || created}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={passwordInput}
                    onChange={handlePasswordChange}
                    disabled={loading || created}
                />
                <button disabled={loading || errorInput || created}>Sign Up</button>
                {errorInput &&
                    <span className='errorInput'>Please enter a valid {errorInput}</span>
                }
                {created &&
                    <span className='createdInput'>
                        <strong>Congratulation!</strong> <br /> 
                        You're account is created! <br /> <br />
                        Sign in with your new account! <br /> 
                        Remember to activate it by following the Link sent to your email!
                    </span>
                }
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form onSubmit={handleSignInForgotSubmit}>
                <h1>{forgot ? "Forgot Password":"Sign in"}</h1>
                <div className="social-container">
                {!forgot && <>
                    <button onClick={handleGoogleSignInClick} style={{backgroundImage:`url(${googleButton})`}}>Login with google</button>
                </>}
                </div>
                <span>{forgot ? "enter your account email":"or use your account"}</span>
                <section className="inputSection">
                    <input
                        type="email"
                        placeholder="Email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        disabled={loading}
                    />
                    {!forgot &&
                        <input
                            type="password"
                            placeholder="Password"
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                            disabled={loading}
                        />
                    }
                </section>
                <span className='forgotSpan' disabled={loading} onClick={handleForgotClick}>
                    {forgot ? "Remembered your password?":"Forgot your password?"}
                </span>
                <button disabled={loading}>
                    {forgot ? "Recover password":"Sign In"}

                </button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                        To keep connected with us please login with your personal info
                    </p>
                    <button 
                        disabled={loading} 
                        onClick={handleSignToggleClick} 
                        className="ghost" 
                        id="signIn"
                    >Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>
                        Enter your personal details and start journey with us
                    </p>
                    <button 
                        disabled={loading} 
                        onClick={handleSignToggleClick} 
                        className="ghost" 
                        id="signUp"
                    >Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
