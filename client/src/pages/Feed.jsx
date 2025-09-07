import React, { useEffect, useState } from 'react'
import { assets, dummyPostsData } from '../assets/assets';
import Loading from '../components/Loading';
import StoriesBar from '../components/StoriesBar';
import PostCard from '../components/PostCard';

const Feed = () => {

  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchFeeds = async () => {
     setFeeds(dummyPostsData);
     setLoading(false);
  }

  useEffect(()=>{
    fetchFeeds();
  },[])
  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>
      {/* Stores and post list */}
      <div>
         <StoriesBar />
         <div className='p-4 space-y-6'>
           {feeds.map((post)=>(
            <PostCard key={post._id} post={post} />
           ))}
         </div>
      </div>
      {/* Right side bar */}
       <div className='max-xl:hidden sticky top-0'>
         <div className='max-w-xs bg-white text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow'>
           <h3>Sponsored</h3>
            <img src={assets.sponsored_img} alt="" className='w-75 h-50 rounded-md' />
            <p className='text-slate-600'>Email marketing</p>
            <p className='text-slate-400'>Superchage your marketing with a powerful, easy-to-use platform build for results.</p>
         </div>
          <h1>Recent Messages</h1>
       </div>
    </div>
  ) : <Loading />
}

export default Feed