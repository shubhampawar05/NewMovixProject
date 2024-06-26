import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./DetailsBanner.css";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "./../../../hook/useFetch.jsx";
import Genres from "./../../../components/genres/Genres.jsx";
import CircleRating from "./../../../components/CircleRating/CircleRating.jsx";
import Img from "./../../../components/lazyloading/Img.jsx";
import PosterFallback from "./../../../assets/Img/no-poster.png";
import { PlayIcon } from "../Playbtn.jsx";
import VideoPopup from "../../../components/videoPopup/VideoPopup.jsx";

const DetailsBanner = ({ video, crew }) => {
    // for videoPopup
    const [show ,setShow]=useState(false);
    const [videoId, setVideoId]= useState(null);
 

  // base url
  const baseUrl = "https://image.tmdb.org/t/p/original";

  // params me id or mediaType mileaga
  const { mediaType, id } = useParams();
  //   console.log(param);

  // geting data for a perticular item
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  console.log(data);

  const _genres = data?.genres?.map((g) => g.id);
  console.log(_genres);

  const finalimg = baseUrl + data?.backdrop_path;
  console.log(finalimg);


  // Filtering crew members for director and writer
  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

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
            <Img src={finalimg} />
          </div>
          <div className="opacity-layer"></div>
          <ContentWrapper>
            <div className="content">
              <div className="left">
                {data?.poster_path ? (
                  <Img src={baseUrl + data?.poster_path} />
                ) : (
                  <Img src={PosterFallback} />
                )}
              </div>
              <div className="right">
                <div className="title">
                  {`${data?.name || data?.title}(${dayjs(
                    data?.release_date
                  ).format("YYYY")})`}
                </div>

                <div className="subtitle">{data?.tagline}</div>
                <Genres data={_genres} />
                <div className="row">
                  <CircleRating rating={data?.vote_average.toFixed(1)} />
                  <div
                    className="playbtn"
                    onClick={() => {
                      setShow(true);
                      setVideoId(video.key);
                    }}
                  >
                    <PlayIcon />
                    <span className="text">Watch Trailer</span>
                  </div>
                </div>

                <div className="overview">
                  <div className="heading">Overview</div>
                  <div className="discription">{data?.overview}</div>
                </div>

                {/* Additional information */}
                <div className="info">
                  {data?.status && (
                    <div className="infoItem">
                      <span className="text bold">Status: </span>
                      <span className="text">{data.status}</span>
                    </div>
                  )}
                  {data?.release_date && (
                    <div className="infoItem">
                      <span className="text bold">Release Date: </span>
                      <span className="text">
                        {dayjs(data.release_date).format("MMM D, YYYY")}
                      </span>
                    </div>
                  )}
                  {data?.runtime && (
                    <div className="infoItem">
                      <span className="text bold">Runtime: </span>
                      <span className="text">
                        {toHoursAndMinutes(data.runtime)}
                      </span>
                    </div>
                  )}
                </div>


                 {/* Director and Writer information */}
                 {director?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Director: </span>
                        <span className="text">
                          {director?.map((d, idx) => (
                            <span key={idx}>
                              {d.name}
                              {director.length - 1 !== idx && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {writer?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Writer: </span>
                        <span className="text">
                          {writer?.map((w, idx) => (
                            <span key={idx}>
                              {w.name}
                              {writer.length - 1 !== idx && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {/* Creator information */}
                    {data?.created_by?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Creator: </span>
                        <span className="text">
                          {data?.created_by?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {data?.created_by.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
              </div>
            </div>

            <VideoPopup
            show={show}
            setShow={setShow}
            videoId={videoId}
            setVideoId={setVideoId}
            />
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
