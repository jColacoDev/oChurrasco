import React, {useState} from 'react'
import {toast} from 'react-toastify'
import { auth } from '../../../firebase/firebase';
import AuthForm from '../../../components/AuthForm/AuthForm';

export default function PasswordUpdate() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    auth.currentUser.updatePassword(password)
      .then(()=>{
        setLoading(false);
        toast.success('Password updated')
      })
      .catch(error =>{
        setLoading(false)
        toast.error(error.message)
      })
  }

  return (
    <div id='passwordUpdate' className="PasswordUpdate">
      {loading ? 
        <h4>Loading...</h4> : 
        <h4>Reset password</h4>
      }
      <AuthForm 
        password={password}
        setPassword={setPassword}
        loading={loading}
        handleSubmit={handleSubmit}
        showPasswordInput={true}
        hideEmailInput={true}
      />
    </div>
  )
}
