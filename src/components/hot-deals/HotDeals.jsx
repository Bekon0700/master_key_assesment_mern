import React from 'react'
import GenericDeals from '../generic-deals/GenericDeals'
import cardData from './../../assets/fakeApi.json'


const HotDeals = () => {
    const data = cardData.slice(6, 11)
  return (
    <div className='py-12 lg:py-0'>
        <GenericDeals title={`Today's hot deals`} data={data}/>
    </div>
  )
}

export default HotDeals