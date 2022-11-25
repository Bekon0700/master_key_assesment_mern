import React from 'react'
import {AiFillCaretDown} from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='bg-[#404040] '>
            <div className='w-11/12 lg:w-5/6 h-48 mx-auto flex flex-col lg:flex-row justify-between lg:items-center'>
                <p className="text-xl lg:text-3xl pt-6 lg:py-0 font-extrabold text-gray-100">shop<span className="font-normal">cart</span></p>
                <div className='flex  gap-4 text-gray-200'>
                    <p>About us</p>
                    <p>Contact</p>
                    <p>Help</p>
                </div>
                <div className='text-gray-200 text-base flex flex-col lg:flex-row gap-2 items-center'>
                    <p>English</p>
                    <AiFillCaretDown />
                </div>
            </div>
        </div>
    )
}

export default Footer