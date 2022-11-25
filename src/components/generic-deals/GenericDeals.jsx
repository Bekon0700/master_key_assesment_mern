import React from 'react'
import Card from '../card/Card'

const GenericDeals = ({data, title}) => {
    return (
        <div>
            <div className='p-3 border-b-2 border-dashed border-[#FFAE5D]'>
                <p className='text-2xl font-semibold'>{title}</p>
            </div>
            <div className={`grid grid-cols-5 gap-8 my-6`}>
                {
                    data?.map((el, id) => <Card key={id} cardData={el} generic={true}/>)
                }
            </div>
        </div>
    )
}

export default GenericDeals