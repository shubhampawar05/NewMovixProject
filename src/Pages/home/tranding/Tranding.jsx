import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from './../../../hook/useFetch'
import Carousel from '../../../components/carousel/Carousel'
const Tranding = () => {

  const [endpoint , setEndpoint] = useState('day')

  const {data, loading} = useFetch(`trending/all/${endpoint}`)
  console.log('form tranding page'+ data);

    const onTabChange = (tab)=>{

    }
  return (
    <div className='carouselSection'>
        <ContentWrapper  className='trandingContentWrapper'>
            <span className='carouselTitle'>
                Tranding
            </span>
            <SwitchTabs data={ ["day","Week"]} onTabChange={onTabChange}/>
           
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Tranding