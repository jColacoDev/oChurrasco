import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


export default function LoadingToRedirect({timer= 0, path}) {
    const [count, setCount]  = useState(timer);
    let navigate = useNavigate();

    useEffect(()=>{
      if(timer <= 0){
        navigate(path);
      }
    }, []);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((currentCount) => --currentCount)
        }, 1000);

        // redirect
        count <= 0 && navigate(path)

        // cleanup
        return () => clearInterval(interval);
    }, [count]);

  if(timer === 0) return <></>  
  return (
    <div className='container p5 text-center'>
        <p>Redirecting page in {count} seconds</p>
    </div>
  )
}
