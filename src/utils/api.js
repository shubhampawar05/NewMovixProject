// in this page just geting data with api only and return that data 

import axios from "axios";

// url for data 
const BaseUrl = "https://api.themoviedb.org/3/";

// token
const TmdbToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGUyZjk2ODQ5YzRkZWQwNWE4MjZlZDljOWU5ODY1YSIsInN1YiI6IjY2MGI3OTc1YzhhNWFjMDE3Yzc5MGJhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x3BuuOAr2tY5A2O-Hg8U7hqxXD6CgNQfrZwrecutaTk';

const headers = {
    Authorization : "bearer " + TmdbToken,
}


// this is a function for geting data for any url and return data for that specific url 

export const fetchDataFromApi = async (url)=>{
    try {
        const { data } = await axios.get(BaseUrl+url, {headers})
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}