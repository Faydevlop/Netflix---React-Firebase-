import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UseAuth } from '../context/AuthContext'

function NavBar() {
  const {user,logOut} = UseAuth()
  const navigate = useNavigate()

  const handleLogout = async () =>{
    try {
      await logOut()
      
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='flex items-center  justify-between p-4 z-[100] absolute w-full' >
      <Link to='/' >
      <h1 className= 'text-red-600 text-4xl font-bold courser-pointer' >NETFLIX</h1>
      </Link>
    
      {
        user?.email ? 
        <div>
        <Link to='/account'>
        <button className='text-white pr-4  ' >Account</button>
        </Link>
    
        <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white' >Log out</button>
       
      
      </div>
      :
      <div>
        <Link to='/signup'>
        <button className='text-white pr-4  ' >Sign up</button>
        </Link>
        <Link to='/login'>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white' >Sign in</button>
        </Link>
      
      </div>
      }
    </div>
  )
}

export default NavBar