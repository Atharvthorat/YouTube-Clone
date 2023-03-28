 import React from 'react'
 
 import { abbreviateNumber } from 'js-abbreviation-number'
 import { Link } from 'react-router-dom'
 import {BsFillCheckCircleFill} from 'react-icons/bs'
 import VideoLength from '../shared/videoLength'


 const Suggestionvideo = ({video}) => {
   return <Link to={`/video/${video.videoId}`}>
    <div className="flex ml-0   mb-3 w-50">
   <div className="relative h-22 lg:h-20 xl:h-24 min-w-[168px] lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
     <img src={video?.thumbnails?.[0]?.url} className="h-full w-full object-cover" />
    {video?.lengthSeconds && ( <VideoLength time={video?.lengthSeconds}/>)}
   </div>
   <div className="flex text-white mt-3">
      
     <div className="flex flex-col ml-3 overflow-hidden">
       <span className="text-sm  lg:text-xs xl:text-sm font-bold text-white ">
         {video?.title}
       </span>
       <span className='text-[9px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7]  flex items-center '>
         {video?.author?.title}
         {video?.author?.badges[0]?.type==="VERIFIED_CHANNEL"&&(
           <BsFillCheckCircleFill className='text-white/[0.5] ml-1 text-[12px] lg:text-[10px] xl:text-[12px]'/>
         )}
       </span>
       <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
         <span>{`${abbreviateNumber(video?.stats?.views,2)} views`}</span>
         <span className='flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1'>.</span>
         <span className='truncate'>{video?.publishedTimeText}</span>
       </div>
     </div>
   </div>
 </div> 
 </Link>
 }
 
 export default Suggestionvideo
 