import React from 'react'
import FavBookImg from "../assets/favoritebook.png"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" className='rounded md:w-9/12'/>
        </div>
<div className='md:w-1/2 space-y-6' >
<h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>
    Find Your Favorite <span className='text-lime-500'> Book Here! </span>
</h2>
<p className='mb-10 text-large md:w-5/6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit fugit nihil placeat dolorum et assumenda aliquam. 
    Cumque necessitatibus voluptates libero tempore placeat facilis repellat accusamus molestias numquam quibusdam, ex quidem. 
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat necessitatibus, culpa dignissimos, officiis accusantium 
    ullam maiores quidem nisi ut, animi recusandae. Mollitia illo qui veniam, est inventore officia quisquam eius?</p>
    {/* stats*/}
    <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
        <div>
            <h3 className='text-3xl font-bold'>800+</h3>
            <p className='text-base'>Book Listing</p>
        
    </div>
    <div>
        
            <h3 className='text-3xl font-bold'>500+</h3>
            <p className='text-base'>Registered Users</p>
        
    </div>
    <div>
        
            <h3 className='text-3xl font-bold'>1200+</h3>
            <p className='text-base'>PDF's Downloads</p>
        
    </div>
</div>
<Link to ="/shop" className='mt-12 block'><button className='bg-yellow-300 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
    Explore Here</button></Link> 
    </div>
    </div>
  )
}

export default FavBook