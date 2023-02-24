import { useAuth0 } from '@auth0/auth0-react';
import React,{useState,useEffect} from 'react'

import queryString from 'query-string';
import { useLocation } from 'react-router';

function Profile() {
    const location = useLocation()
    const {code} = queryString.parse(location.search);

   

    const [data,setData] = useState(null);

    useEffect(() => {
         localStorage.setItem('auth_code',JSON.stringify(code))
    },[code])
    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
      } = useAuth0();

      console.log(location)

      console.log(user)

  return (
    <div>
      <h1>{'user?.name'}</h1>
    </div>
  )
}

export default Profile;