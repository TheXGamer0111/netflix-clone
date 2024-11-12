import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
    const options = {
        headers : {
            accept: "application/json",
            Authorization: `Bearer ` + ENV_VARS.TMDB_API_KEY,
        },
    };

    const response = await axios.get(url, options);
    if (response.status !== 200) {
        throw new Error("Failed to fetch data", response.statusText);
    }
    return response.data;

    };



// fetch method

//   const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
//   const data = await response.json()
//   return data