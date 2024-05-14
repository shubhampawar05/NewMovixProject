import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from "./../../hook/useFetch"
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './Cast/Cast'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'

const Details = () => {

  // params me id or mediaType mileaga
  const {mediaType,id} = useParams();
  // console.log(param);

  // geting data for a perticular item
  const {data , loading}= useFetch(`/${mediaType}/${id}`);


  // Fetching credits information for the given movie or TV show
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );



  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>

      <Cast data={credits?.cast} loading={creditsLoading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details