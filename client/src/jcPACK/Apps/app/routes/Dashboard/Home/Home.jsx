import './Home.scss'
import React from 'react'
import { returnInitials } from '../../../../../utils/utils'
import Badge1 from '../Badge1/Badge1'

export default function Home({
    loading = true,
    values = {},
}) {


    if(loading) return <h4 className="text-danger">Loading...</h4>
  return (
    <div className='Home'>
        <section className="welcome">
            <h4>Welcome {values.name}</h4>
            <Badge1 
                name={values.name}
                imageUrl={values?.images[0]?.url}
            />
        </section>
        <section className='greeting'>
            <p>
                Your account has been created. We're still under construction, but stay tuned for updates and exciting new features coming soon.
                <br /><br />
                Thank you for joining us, and we can't wait for you to be part of our journey.
                <br />
                Best regards,
            </p>
        </section>
    </div>
  )
}
