import React from 'react'
import Footer from '../../components/footer/Footer'
import Furniture from '../../components/furniture/Furniture'
import Hero from '../../components/hero/Hero'
import HotDeals from '../../components/hot-deals/HotDeals'
import ReviewPurchase from '../../components/review-purchase/ReviewPurchase'
import Searched from '../../components/searched-items/Searched'
import Special from '../../components/special-offer/Special'

import NavBar from './../../components/nav-bar/NavBar'
const Home = () => {
    return (
        <div className=''>
            <div className='w-11/12 lg:w-5/6 mx-auto'>
                <NavBar />
                <Hero />
                <HotDeals />
                <Searched />
                <Special />
                <Furniture />
                <ReviewPurchase />
            </div>
            <Footer />
        </div>
    )
}

export default Home