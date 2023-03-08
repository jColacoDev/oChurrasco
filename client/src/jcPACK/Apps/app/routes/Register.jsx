import React from 'react'
import { toast } from 'react-toastify'
import { auth } from '../../../utils/firebase';
import AuthForm from '../../../components/forms/AuthForm';

export default function Register() {

    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const config= {
            url: import.meta.env.VITE_CONFIRMATION_EMAIL_REDIRECT,
            handleCodeInApp: true
        }
        await auth.sendSignInLinkToEmail(email, config);

        // show notification
        toast.success(`Email is sent to ${email}. Click the link to complete registration.`)

        // save to local storage
        window.localStorage.setItem('emailForRegistration', email);

        setEmail('');
        setLoading(false);
    }

  return (
    <div>
        {loading ? <h4 className='text-danger'>Loading...</h4> : <h4>Register</h4>}
        <AuthForm 
            email={email} 
            loading={loading} 
            setEmail={setEmail} 
            handleSubmit={handleSubmit} 
        />
    </div>
  )
}
