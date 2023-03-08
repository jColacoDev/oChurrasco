import React, {useState, useMemo, useEffect} from 'react'
import {toast} from 'react-toastify'
import {useQuery, useMutation} from '@apollo/client'
import { USER_UPDATE } from '../../../../graphql/mutations'
import { PROFILE, GET_ALL_USERS } from '../../../../graphql/queries'
import Dashboard1 from './Dashboard1'
// import { auth } from '../../../../firebase/firebase'

export default function Dashboard() {
    const [values, setValues] = useState({
        username: '',
        name: '',
        email: '',
        about: '',
        images: []
    })
    const [loading, setLoading] = useState(false);

    const {
        data: usersData , 
        loading: usersLoading, 
        error: usersError, 
    } = useQuery(GET_ALL_USERS);
    
    const {
        data : profileData, 
        loading: profileLoading, 
        error: profileError, 
        refetch
    } = useQuery(PROFILE);
    useMemo(()=>{
        refetch()
        console.log(profileData)
        if(profileData){
            
            setValues({
                ...values,
                username: profileData.profile.username,
                name: profileData.profile.name,
                email: profileData.profile.email,
                about: profileData.profile.about,
                images: profileData.profile.images
            })
        }
    }, [profileData]);

    const [userUpdate] = useMutation(USER_UPDATE, {
        update: ({profileData}) => {
            console.log('USER UPDATE MUTATION IN PROFILE', profileData);
            toast.success('Profile updated');
        }
    });
    
    // useEffect(()=>{
    //     console.log(usersData)
    //     console.log(auth.currentUser);
    //     console.log(profileData);

    // },[usersData])
    
    if (profileLoading) {
        return <div>Loading...</div>;
    }
    if (profileError) {
        console.error(profileError);
    }
return (
    <Dashboard1
        usersData = {usersData?.allUsers}
        usersLoading = {usersLoading}
        loading = {loading}
        setLoading = {setLoading}
        values = {values}
        setValues = {setValues}
        userUpdate = {userUpdate}
    />
);
}
