import React from 'react'

const Card = ({ cardData, generic }) => {
    const { price, discount, picture, name } = cardData
    return (
        <div className={generic ? 'w-11/12 mx-auto p-3 rounded-xl hover:outline hover:outline-pink-200 duration-300 ease-in-out' : 'w-11/12 mx-auto'}>
            <img src={picture} alt="" className='w-[235px] h-[235px] mx-auto' />
            <div className='flex flex-col gap-3 justify-between'>
                {
                    generic ? <p className='text-base font-medium h-20'>{name}</p> : <p className='text-base font-medium h-14'>{name}</p>
                }
                <div className='flex justify-between items-center'>
                    <p>{price}</p>
                    <p className='text-base text-[#FF3232] font-medium'>-{discount}% off</p>
                </div>
            </div>
        </div>
    )
}

export default Card