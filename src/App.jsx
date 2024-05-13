import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfigurations, getGeners } from "./redux/homeSlice";

import Home from "./Pages/home/Home";
import Explore from "./Pages/explore/Explore";
import Details from "./Pages/details/Details";
import PageNotFound from "./Pages/404/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SearchPage from "./Pages/searchPage/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  // const url = useSelector((state) => state.home.url);
  // console.log(url);

  // const apiTesting = () => {
  //   fetchDataFromApi("/movie/popular")
  //     .then((res) => {
  //       console.log(res);
  //       dispatch(getApiConfigurations(res));
  //     })
  //     .catch((error) => console.log(error));
  // };

  useEffect(() => {
    // apiTesting();
    genresCall()
  }, []);


  // Fetch genres for TV and movie for showing on homepage 
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGeners(allGenres));
  };


  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/:mediaType/:id" element={<Details />} />,
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
