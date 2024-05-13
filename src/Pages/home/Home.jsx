import React from 'react'
import "./Home.css"
import HeroBanner from './heroBanner/HeroBanner'
import Tranding from './tranding/Tranding'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

const Home = () => {
  return (
    <div className='Home'>
      <HeroBanner/>
      <Tranding/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home