import React, { useEffect } from 'react'
import Card from '../card/Card'

import data from './../../assets/fakeApi.json'

const Hero = () => {
  return (
    <div className='py-6'>
        <div className='flex items-center'>
            <div className='w-1/3'>
                <p className='text-8xl font-light'>we picked some <span className='text-[#FFAE5D] font-bold'>cool things</span> for you!</p>
            </div>
            <div className='w-3/5 mx-auto'>
                <div className='p-3 border-b-2 border-dashed border-[#FFAE5D]'>
                    <p className='text-2xl font-semibold'>hot deals for you</p>
                </div>
                <div className='grid grid-cols-3 gap-8 pt-6'>
                    {
                        data?.slice(0,6).map((el, id) => <Card key={id} cardData={el}/>)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero