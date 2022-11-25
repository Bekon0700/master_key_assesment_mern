import React from 'react'

const Searched = () => {
  return (
    <div className='py-12 lg:py-0'>
        <div>
            <div className='p-3 border-b-2 border-dashed border-[#FFAE5D]'>
                <p className='text-2xl font-semibold'>Your searched items</p>
            </div>
            <div className={`grid grid-cols-1 lg:grid-cols-6 gap-8 my-6`}>
                <img src="img/Rectangle 1.png" alt="" className='w-[235px] h-[235px] mx-auto'/>
                <img src="img/Component 4.png" alt="" className='w-[235px] h-[235px] mx-auto'/>
                <img src="img/Component 5.png" alt="" className='w-[235px] h-[235px] mx-auto'/>
                <img src="img/Component 6.png" alt="" className='w-[235px] h-[235px] mx-auto'/>
                <img src="img/Component 7.png" alt="" className='w-[235px] h-[235px] mx-auto'/>
                <img src="img/Component 8.png" alt="" className='w-[235px] h-[235px] mx-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Searched