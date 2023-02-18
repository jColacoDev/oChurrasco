import React, {useContext, useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import LoadingToRedirect from '../components/LoadingToRedirect';
// import { AccountAppData } from '../Apps/app/App';

export default function PrivateRoute() {
    const {state} = useContext(AuthContext);
    const [user, setUser] = useState(false);
  
    useEffect(() => {
        if(state.user){
            setUser(true);
        }
    }, [state.user])
        
    
    return user ? <Outlet/> : <LoadingToRedirect timer={5} path={`/login`}/>
    // return user ? <Outlet/> : <LoadingToRedirect timer={5} path={`${AccountAppData.path}/login`}/>
}
