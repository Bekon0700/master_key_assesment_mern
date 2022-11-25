import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'

const ReviewPurchase = () => {
    return (
        <div>
            <div>
                <div className='p-3 border-b-2 border-dashed border-[#FFAE5D]'>
                    <p className='text-2xl font-semibold'>Review your purchase</p>
                </div>
                <div className={`grid grid-cols-2 gap-8 my-6`}>
                    <div className='flex items-center gap-8'>
                        <img src="img/Rectangle 4.png" alt="" className='w-[365px] h-[365px] mx-auto' />
                        <div className='flex flex-col gap-4'>
                            <p className='text-2xl font-semibold'>2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB)</p>
                            <div>
                                <p className='text-base'>You bought it with the best price</p>
                                <p className='text-lg font-semibold'>99,900.00</p>
                            </div>
                            <div className='text-2xl text-[#FFAE5D] flex gap-4 items-center'>
                                <div className='flex gap-3'>
                                <AiOutlineStar className=''/>
                                <AiOutlineStar className=''/>
                                <AiOutlineStar className=''/>
                                <AiOutlineStar className=''/>
                                <AiOutlineStar className=''/>
                                </div>
                                <p className='text-base'>0 rating</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-8'>
                        <img src="img/Rectangle 4 (1).png" alt="" className='w-[365px] h-[365px] mx-auto' />
                        <div className='flex flex-col gap-4'>
                            <p className='text-2xl font-semibold'>2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB)</p>
                            <div>
                                <p className='text-base'>You bought it with the best price</p>
                                <p className='text-lg font-semibold'>99,900.00</p>
                            </div>
                            <div className='text-2xl text-[#FFAE5D] flex gap-4 items-center'>
                                <div className='flex gap-3'>
                                <AiOutlineStar className=''/>
                                <AiOutlineStar className=''/>
                                <AiOutlineStar className=''/>
                                <AiOutlineStar className=''/>
                                <AiOutlineStar className=''/>
                                </div>
                                <p className='text-base'>0 rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewPurchase