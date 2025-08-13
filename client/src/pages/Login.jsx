import React from 'react'
import { assets } from '../assets/assets'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* Background Image */}
        <img src={assets.bgImage} alt="" className='absolute top-0 left-0 -z-1 w-full h-full object-cover' />
        
      {/* Left Side: Branding */}
      <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40'>
         <img src={assets.logo} alt="" className='h-12 object-contain' />
      </div>
    </div>
  )
}

export default Login