import "./HeroBanner.css";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useFetch from "../../../hook/useFetch";
import Img from "./../../../components/lazyloading/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  console.log(background);

  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");
  // console.log(data);


  // for background image
  useEffect(() => {
    const bg = data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    const finalPath = "https://image.tmdb.org/t/p/original" + bg;
    setBackground(finalPath);
  }, [data]);

  // input search value
  const searchQueryHandler = (event) => {
    if (query != "" && event.key === "Enter") {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="HeroBanner">
      {/* bg - images */}
      <div className="backdrop-img">
        <Img src={background} />
      </div>
      {/* linear gradiante */}
      <div className="opacity-layer"></div>

      
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of Movies, TV Show and people to discover. Explore now.{" "}
          </span>

          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show..."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button> Search </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
