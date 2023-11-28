import React from 'react';
import UseAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const usePropertyBought = () => {
    const { user } = useAuth()
    const axiosPublic = UseAxiosPublic()
    const { data: propertyBroughts = [], refetch } = useQuery({
        queryKey: ['propertyBroughts', user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/propertyBroughts/${user.email}`)
            // console.log(res.data)
            return res.data
        }
    })


    return [propertyBroughts, refetch]
};

export default usePropertyBought;