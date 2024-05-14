// Import necessary dependencies and styles
import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Import local components and assets
import "./MovieCard.css";
import Img from "./../../components/lazyloading/Img";
import CircleRating from "./../CircleRating/CircleRating";
import Genres from "./../genres/Genres";
import PosterFallback from "./../../assets/Img/no-poster.png";

// Functional component for displaying movie card
const MovieCard = ({ data, fromSearch, mediaType }) => {
  // base url for image
  const baseUrl = "https://image.tmdb.org/t/p/original"
  const navigate = useNavigate();
  
  // Create the poster URL with fallback
  const posterUrl = data.poster_path
    ? baseUrl + data.poster_path
    : PosterFallback;

  return (
    // Container for the movie card
    <div
      className="movieCard"
      // Navigate to details page on click
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      {/* Poster block with lazy-loaded image */}
      <div className="posterBlock">
        <Img className="posterImg" src={posterUrl} />
        {/* Display rating and genres if not from search results */}
        {!fromSearch && (
          <>
            <CircleRating rating={data.vote_average.toFixed(1)} />
            <Genres data={data.genre_ids.slice(0, 2)} />
          </>
        )}
      </div>

      {/* Text block with movie details */}
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
