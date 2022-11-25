import React from 'react'
import GenericDeals from '../generic-deals/GenericDeals'
import cardData from './../../assets/fakeApi.json'
const Furniture = () => {
    const data = cardData.slice(11, 16)
  return (
    <div>
        <GenericDeals title={`Deals on furniture`} data={data}/>
    </div>
  )
}

export default Furniture