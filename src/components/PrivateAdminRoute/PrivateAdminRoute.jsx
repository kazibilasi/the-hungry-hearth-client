/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateAdminRoute = ({children}) => {
    const { user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    console.log(isAdmin, user)
    const location = useLocation()
    if(loading || isAdminLoading){
        return <span className="loading loading-dots loading-lg mx-auto"></span>
    }

    if (user && isAdmin?.admin) {
        return children
        

    }
  
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default PrivateAdminRoute;