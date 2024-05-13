import React from "react";
import { useSelector } from "react-redux";
import "./Geners.css";

// Genres component to display genre names based on genre ids
const Genres = ({ id }) => {
  console.log(id);
  // and in data we will recive id form carousele componentes


  // geting geners data form store
  const genres = useSelector((store) => store.home.geners);
console.log(genres);
  // Render genre names for each genre id in the provided data
  return (
    <div className="genres">
      {id?.map((genId) => {
        console.log(genId)
        // Check if the genre exists in the store before rendering
        if (!genres[genId]?.name) return;
        return (
          <div key={genId} className="genre">
            {genres[genId]?.name}
          </div>
        );
      })}
    </div>
  );
};

// Export the Genres component
export default Genres;
