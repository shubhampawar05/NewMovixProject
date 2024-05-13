import React from 'react'
import "./Home.css"
import HeroBanner from './heroBanner/HeroBanner'
import Tranding from './tranding/Tranding'

const Home = () => {
  return (
    <div className='Home'>
      <HeroBanner/>
      <Tranding/>
    </div>
  )
}

export default Home