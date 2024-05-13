import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from "./../../hook/useFetch"
import DetailsBanner from './detailsBanner/DetailsBanner'

const Details = () => {

  // // params me id or mediaType mileaga
  // const {mediaType,id} = useParams();
  // console.log(param);

  // // geting data for a perticular item
  // const {data , loading}= useFetch(`/${mediaType}/${id}`);


  return (
    <div>
      <DetailsBanner/>
    </div>
  )
}

export default Details