import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Addsale from '../components/Addsale'
import NewArrivals from '../components/NewArrivals'

const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Banner/>
      <Addsale/>
      <NewArrivals/>
    </div>
  )
}

export default Home
