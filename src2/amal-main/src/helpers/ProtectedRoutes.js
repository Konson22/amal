import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { useProfile } from '../contexts/ProfileContextProvider';


export default function ProtectedRoutes() {
    const { profile } = useProfile()

    return profile ? <Outlet /> : <Navigate to='/login' />
}
