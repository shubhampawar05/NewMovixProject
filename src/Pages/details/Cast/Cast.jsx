import React from "react";
// import { useSelector } from "react-redux";

import "./Cast.css";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "./../../../components/lazyloading/Img";
import avatar from "../../../assets/Img/avatar.png";

const Cast = ({ data, loading }) => {
   
  // base url
  const baseUrl = "https://image.tmdb.org/t/p/original";

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
    return (
        <div className="castSection">
            <ContentWrapper>
                <div className="sectionHeading">Top Cast</div>
                {!loading ? (
                    <div className="listItems">
                    {data?.map((item)=>{
                        let imgUrl =item.profile_path ? baseUrl + item.profile_path : avatar; 

                        return(
                            <div key={item.id}
                            className="listItem">
                                {/* profile */}
                                <div className="profileImg">
                                    <Img src={imgUrl}/>
                                </div>
                                {/* name */}
                                <div className="name">
                                    {item.name}
                                </div>
                                {/* character */}
                                <div className="character">
                                    {item.character}
                                </div>
                            </div>
                        )
                    })}
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Cast;