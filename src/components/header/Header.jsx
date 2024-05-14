import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./Header.css";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "./../../assets/Img/movix-logo.svg";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

// for move to top for every page
useEffect(()=>{
window.scrollTo(0,0);
},[location])


// for opening of searchBar 
  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };
  // for opening of mobile view part
  const openMoblieMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

   // Handle search input and navigate on Enter key
   const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  // Handle navigation to movie or TV show explore pages
  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");

    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  return (
    <header className={`Header ${mobileMenu ? "mobileView" : ""}`}>
      <ContentWrapper className="contentWrapper">
        <div className="logo"onClick={()=>   navigate(`/`)}>
          <img src={logo} alt="" />
        </div>
        
        <ul className="menuItems">
          <li className="menuItem" onClick={()=>navigationHandler('movie')}>Movies</li>
          <li className="menuItem" onClick={()=>navigationHandler('tv')}>TV Shows</li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>

        <div className="mobileMenuItes">
          <HiOutlineSearch  onClick={openSearch}/>
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMoblieMenu} />
          )}
        </div>
      </ContentWrapper>
      
      
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
