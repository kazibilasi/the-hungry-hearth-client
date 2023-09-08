/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../AuthProvider/AuthProvider';

const useCarts = () => {
    const token = localStorage.getItem('access-token')
    const {user, loading} = useContext(AuthContext)
    const { refetch, data: cart=[]} = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers:{
                    authorization : `bearer ${token}`
                }
            })
            return response.json()
        }
      })
      return [cart, refetch]
};

export default useCarts;