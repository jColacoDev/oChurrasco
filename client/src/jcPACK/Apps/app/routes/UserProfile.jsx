import React from 'react'

export default function UserProfile({
    handleSubmit = (f)=>f,
    handleChange = (f)=>f,
    username = '',
    name = '',
    email = '',
    about = '',
    loading = false
}) {
  return (
    <form className='UserProfileForm' onSubmit={handleSubmit}>
        <section>
            <label htmlFor="username">Username</label>
            <input type="text" 
                name='username' 
                value={username ? username : ""}
                onChange={handleChange} 
                placeholder='Username' 
                disabled={loading}
            />
        </section>
        <section>
            <label htmlFor="name">Name</label>
            <input type="text" 
                name='name' 
                value={name ? name : ""} 
                onChange={handleChange} 
                placeholder='Name' 
                disabled={loading}
            />
        </section>
        <section>
            <label htmlFor="email">Email</label>
            <input type="text" 
                name='email' 
                value={email ? email : ""} 
                onChange={handleChange} 
                placeholder='Email' 
                disabled
            />
        </section>
        <section>
            <label htmlFor="about">About</label>
            <textarea 
                name='about' 
                value={about ? about : ""} 
                onChange={handleChange} 
                placeholder='About' 
                disabled={loading}
            />
        </section>
        <button type="submit"
            disabled={!email || loading}
        >Submit</button>
    </form>
  )
}
