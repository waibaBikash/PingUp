import { BadgeCheck } from 'lucide-react'
import React from 'react'

const StoryViewer = ({viewStory, setViewStory}) => {
  return (
    <div className='fixed inset-0 h-screen bg-black bg-opacity-90 z-110 flex items-center justify-center' style={{backgroundColor: viewStory.media_type === 'text' ? viewStory.background_color : '#000000'}}>
       {/* Progress Bar */}
       <div className='absolute top-0 left-0 w-full h-1 bg-gray-700'>
           <div className='h-full bg-white transition-all duration-100 linear' style={{width: '50'}}>

           </div>
          </div>
            {/* User Info - Top Left */}
            <div className='absolute top-4 left-4 flex items-center space-x-3 p-2 px-4 sm:p-4 sm:px-8 backdrop-blur-2xl rounded bg-black/80'>
               <img src={viewStory.user?.profile_picture} alt="" className='size-7 sm:size-8 rounded-full object-cover border border-white' />
                <div className='text-white font-medium flex items-center gap-1.5'>
                   <span>
                    {
                      viewStory.user?.fulll_name
                    }
                    <BadgeCheck size={18} />
                   </span>
                </div>
            </div>
       </div>
  )
}

export default StoryViewer