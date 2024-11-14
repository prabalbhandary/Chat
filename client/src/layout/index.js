import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const AuthLayouts = ({children}) => {
  return (
    <>
        <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white'>
            <Link to="/email">
            <img 
              src={logo}
              alt='logo'
              width={180}
              height={60}
            />
            </Link>
        </header>

        { children }
    </>
  )
}

export default AuthLayouts
