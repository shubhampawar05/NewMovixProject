import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from './../../../hook/useFetch'
import Carousel from '../../../components/carousel/Carousel'


const Popular = () => {

  const [endpoint , setEndpoint] = useState('movie')

  const {data, loading} = useFetch(`${endpoint}/popular`)
  console.log('form tranding page'+ data);

    const onTabChange = (tab)=>{
setEndpoint(tab === 'Movies'  ? "movie" : "tv")
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper  className='trandingContentWrapper'>
            <span className='carouselTitle'>
                What's Popular
            </span>
            <SwitchTabs data={ ["Movies","TV Shows"]} onTabChange={onTabChange}/>
           
        </ContentWrapper>
        <Carousel data={data?.results} endpoint={endpoint} loading={loading}/>
    </div>
  )
}

export default Popular;