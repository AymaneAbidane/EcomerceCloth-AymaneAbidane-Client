import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./home.scss"
import Featuredproducts from '../../components/Featuredproducts/Featuredproducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'

function Home() {

  return (
    <div className='home'>
       <Slider/>
       <Featuredproducts type="featured"/>
       <Categories/>
       <Featuredproducts type="trending"/>
       <Contact/>
    </div>
  )
}

export default Home