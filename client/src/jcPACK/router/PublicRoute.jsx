import React, {useContext, useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

export default function PublicRoute({urlPath}) {
    const {state} = useContext(AuthContext);
    let navigate = useNavigate();

    useEffect(() => {
        if(state.user){
            navigate(`${urlPath}/dashboard`);
        }
    }, [state.user])

    return <Outlet/>;
}
