import React from 'react'
import { Navigate } from 'react-router-dom'
import { UseAuth } from '../context/AuthContext'

const ProtectedRoute = ({children}) => {
    const {user} = UseAuth()



    if(!user){
        return <Navigate to='/' />
    }else{
        return children
    }
  return (
    <div>
      
    </div>
  )
}

export default ProtectedRoute
