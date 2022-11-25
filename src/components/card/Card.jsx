import React from 'react'

const Card = ({ cardData }) => {
    const { price, discount, picture, name } = cardData
    console.log(cardData)
    return (
        <div className='w-11/12'>
            <img src={picture} alt="" className='w-[235px] h-[235px] mx-auto' />
            <div className='flex flex-col gap-3 justify-between'>
                <p className='text-base font-medium h-12'>{name}</p>
                <div className='flex justify-between items-center'>
                    <p>{price}</p>
                    <p className='text-base text-[#FF3232] font-medium'>-{discount}% off</p>
                </div>
            </div>
        </div>
    )
}

export default Card