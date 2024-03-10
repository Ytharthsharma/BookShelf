import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-lime-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/*left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black' >Read Your Best Books <span className='text-lime-700'>
                    for the Best Prices</span></h2>
                <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Ab dolorum dolore fuga odio aut beatae rem doloremque iste sunt omnis eum incidunt, 
                     a corporis animi necessitatibus inventore dolorem. Dolorum, repudiandae?</p>
                     <div>
                        <input type="search" name='search' id='search' placeholder='Search a Book' className='py-2 px-2 rounded-s-sm outline-none'/>
                        <button className='bg-yellow-300 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 ' >Search</button>

                     </div>
            </div>
        {/*right side */}
        <div>
            <BannerCard></BannerCard>
        </div>

        </div>

    </div>
  )
}

export default Banner