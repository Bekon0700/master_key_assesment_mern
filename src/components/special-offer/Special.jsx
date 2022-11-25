import React from 'react'

const Special = () => {
    return (
        <div className="my-8 w-full h-[800px] bg-no-repeat bg-cover bg-center rounded-2xl flex flex-col gap-10
         justify-center items-center"
            style={{ backgroundImage: "url('img/Rectangle 3.png')" }}
        >
            <div className='text-[#A29781]'>
                <p className='text-lg text-end'>special offer on</p>
                <p className='text-8xl capitalize'>furniture</p>
            </div>
            <p className='text-[#606060] text-2xl font-medium'>check it out >>></p>
        </div>
    )
}

export default Special