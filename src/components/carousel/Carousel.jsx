import React, { useRef } from "react";
import "./Carousel.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "./../lazyloading/Img";
import PosterFallback from "./../../assets/Img/no-poster.png";
import CircleRating from "../CircleRating/CircleRating";
import Genres from "../genres/Genres";

const Carousel = ({ data, loading }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  console.log(url);
  const navigate = useNavigate();

  const navigation = (dir) => {};

  // Skeleton item component for loading state
  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <ContentWrapper className="carouselContentWrapper">
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRightNav arrow"
          onClick={() => navigation("right")}
        />
        {/* carousel */}
        {!loading ? (
          <div className="carouselItems">
            {data?.map((item) => {
              const baseUrl = "https://image.tmdb.org/t/p/original";
              const posterUrl = item.poster_path
                ? baseUrl + item.poster_path
                : PosterFallback;
              // console.log(posterUrl);
              return (
                <div key={item.id} className="carouselItem"
                onClick={()=>navigate(`${item.media_type}/${item.id}`)}
                >
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                  </div>
                 
                  <Genres id={item.genre_ids.slice(0,2)}/>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="title">
                      {dayjs(item.release_Date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
