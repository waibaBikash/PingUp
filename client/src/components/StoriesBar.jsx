import React, { useEffect, useState } from 'react'
import { dummyStoriesData } from '../assets/assets';
import { Plus } from 'lucide-react';

const StoriesBar = () => {

  const [stories, setStories] = useState([]);

  const fetcthStories = async () => {
    setStories(dummyStoriesData);
  }

  useEffect(()=>{
    fetcthStories();
  },[])
  return (
    <div className='w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl no-scrollbar overflow-x-auto px-4'>
       <div className='flex gap-4 pb-5'>
         {/* Add Story Card */}
          <div className='rounded-lg shadow-sm min-w-30 max-w-30 max-h-40 aspect-[3/4] hover:shadow-lg transition-all duration-200 border-2 border-dashed border-indigo-300 bg-gradient-to-b from-indigo-50 to-white'>
              <div className='h-full flex flex-col items-center justify-center p-4'>
                <div className='size-10 bg-indigo-500 rounded-full flex items-center justify-center mb-3'>
                   <Plus className='w-5 h-5 text-white' />
                </div>
                <p className='text-sm font-medium text-slate-700 text-center'>Create Storey</p>
              </div>
          </div>
       </div>
    </div>
  )
}

export default StoriesBar