import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";


import { useSelector, useDispatch } from 'react-redux'
import { getApiConfigurations, getGeners } from "./redux/homeSlice";

import Home from "./Pages/home/Home";
import Explore from "./Pages/explore/Explore";
import Details from "./Pages/details/Details";
import PageNotFound from "./Pages/404/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SearchPage from "./Pages/searchPage/SearchPage";

const App = () => {
  const dispatch = useDispatch();
  const url = useSelector(state=>state.home.url)
  console.log(url);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular")
      .then((res) => dispatch(getApiConfigurations(res)))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    apiTesting();
  }, [])
  
  return <div>
    hello 
  </div>;
};

export default App;
