import './Settings.scss'
import React from 'react'
// import PasswordForgot from '../../PasswordForgot'
// import PasswordUpdate from '../../PasswordUpdate'
import FileUpload from '../../../../../components/FileUpload/FileUpload'
import UserProfileForm from '../UserProfileForm/UserProfileForm'


export default function Settings({
    loading = true,
    setLoading = (f)=>f,
    values = {},
    setValues = (f)=>f,
    userUpdate = (f)=>f,
}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        userUpdate({variables: {input: values}});
        setLoading(false);
    };
    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

  return (
    <div className='Settings'>

    <FileUpload 
        values={values}
        loading={loading}
        setValues={setValues}
        setLoading={setLoading}    
    />

    {values &&
        <UserProfileForm 
            {...values}
            loading={loading}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
        />
    }
    <PasswordForgot /> 
    <PasswordUpdate />

    </div>
  )
}
