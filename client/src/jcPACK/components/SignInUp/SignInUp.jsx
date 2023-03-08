import './SignInUp.scss'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { validateEmail } from '../../utils/utils';
// import googleButton from './../../../assets/images/login/googleButton.png'
const googleButton = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"

export default function SignInUp({
    handleGoogleSignInClick= (f)=>f,
    handleSignUpSubmit= (f)=>f,
    handleSignInSubmit= (f)=>f,
    handleForgotSubmit= (f)=>f,
    setEmailInput= (f)=>f,
    setPasswordInput= (f)=>f,
    setNameInput= (f)=>f,
    emailInput = '',
    passwordInput = '',
    nameInput = '',
    loading = false
}) {
    const containerRef = useRef();
    const [created, setCreated] = useState(false);
    const [forgot, setForgot] = useState(false);
    const [recaptchaValidation, setRecaptchaValidation] = useState();
    const [errorInput, setErrorInput] = useState("");

    useEffect(()=>{
        clearInputs();
    },[])

    /*////////////////////////////////////////////////*/
    /*////////////////////////////////////////////////*/
    
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
