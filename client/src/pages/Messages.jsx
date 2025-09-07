import React from 'react'
import { dummyConnectionsData } from '../assets/assets'

const Messages = () => {
  return (
    <div className='min-h-screen relative bg-slate-50'>
        <div className='max-w-6xl mx-auto p-6'>
            {/* Title */}
            <div>
               <h1 className='text-3xl font-bold text-slate-900 mb-2'>Messages</h1>
               <p className='text-slate-600'>Talk to your frinds and family</p>
            </div>
            
            {/* Connected Users */}
             <div className='flex flex-col gap-3'>
                {dummyConnectionsData.map((user)=>(
                  <div key={user._id} className='max-w-xl flex flex-wrap gap-5 p-6 bg-white shadow rounded-md'>
                    <img src={user.profile_picture} alt="" className='rounded-full size-12 mx-auto' />
                      <div className='flex-1'>
                         <p className='font-medium text-slate-700'>{user.full_name}</p>
                         <p className='text-slate-500'>@{user.username}</p>
                         <p className='text-sm text-gray-600'>{user.bio}</p>
                      </div>
                  </div>
                ))}
             </div>

        </div>
      
    </div>
  )
}

export default Messages