import React, {useState} from 'react'
import { toast } from 'react-toastify'
import { auth } from '../../../firebase/firebase';
import AuthForm from '../../../components/AuthForm/AuthForm';


export default function PasswordForgot() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const config= {
            url: import.meta.env.VITE_PASSWORD_FORGOT_REDIRECT,
            handleCodeInApp: true
        }
        await auth.sendPasswordResetEmail(email, config).then(()=>{
            setEmail('');
            setLoading(false);
            toast.success(`Email is sent to ${email}. Click on the link to reset your password`)
        }).catch(error => {
            console.log('error on password forgot email', error)
        })
    }

    return <div id='passwordForgot' className='PasswordForgot'>
        {loading ? <h4>Loading...</h4> : <h4>Forgot Password?</h4>}
        <AuthForm
            email={email}
            setEmail={setEmail}
            loading={loading}
            handleSubmit={handleSubmit}
        />
    </div>
}
