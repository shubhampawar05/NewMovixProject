import React from 'react'
import "./Home.css"
import HeroBanner from './heroBanner/HeroBanner'
import Tranding from './tranding/Tranding'
import Popular from './popular/Popular'

const Home = () => {
  return (
    <div className='Home'>
      <HeroBanner/>
      <Tranding/>
      <Popular/>
    </div>
  )
}

export default Home