import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import { API_KEY, imageURL } from '../../Constants/Constants'
import { originals } from '../../URLs';

function Banner() {

    const [movie, setMovie] = useState();

    useEffect(() => {
        axios.get(originals)
            .then((response) => {
                console.log(response.data);
                const movie_num = Math.floor(Math.random() * response.data.results.length);
                setMovie(response.data.results[movie_num]);
            })
    }, [])

    // function truncate(str, n) {
    //     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    // }

    return (
        <div className="banner" style={{ backgroundImage: `url(${movie ? imageURL + movie.backdrop_path : ""})` }}>
            <div className="content">
                <h1 className="banner__title">{movie?.name}</h1>
                <div className="banner__buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="banner__description">
                    {movie?.overview}
                </h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
