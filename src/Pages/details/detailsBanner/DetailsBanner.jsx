import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./DetailsBanner.css";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "./../../../hook/useFetch.jsx";
// import Genres from "./../../../components/genres";
import CircleRating from "./../../../components/CircleRating/CircleRating.jsx";
import Img from "./../../../components/lazyloading/Img.jsx";
import PosterFallback from "./../../../assets/Img/no-poster.png";

const DetailsBanner = ({ video, crew }) => {
    // base url 
    const baseUrl = "https://image.tmdb.org/t/p/original"

    // params me id or mediaType mileaga
  const {mediaType,id} = useParams();
//   console.log(param);

  // geting data for a perticular item
  const {data , loading}= useFetch(`/${mediaType}/${id}`);
  console.log(data);

  const finalimg = baseUrl + data?.backdrop_path
  console.log(finalimg);

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    return (
        <div className="detailsBanner">
            {!loading ? (
                <div>
                    <div className="backdrop-img">
                        <Img src={finalimg}/>
                    </div>
                    <div className="opacity-layer"></div>
                    <ContentWrapper>
                        <div className="content">
                            <div className="left">
                                {
                                    data?.poster_path ? (
                                        <Img src={baseUrl + data?.poster_path}/>
                                    ):(
                                        <Img src={PosterFallback}/>
                                    )
                                }
                            </div>
                            <div className="right">
                                {`${data.name|| data.title}(${(data.release_date).format("YYYY")})`}
                            </div>
                        </div>
                    </ContentWrapper>
                </div>
            ) : (
                <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </div>
    );
};

export default DetailsBanner;