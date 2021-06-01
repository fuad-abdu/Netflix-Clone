import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { imageURL } from '../../Constants/Constants'
import "./RowPost.css"
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer';

function RowPost(props) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('')

    useEffect(() => {
        axios.get(props.url)
            .then((response) => {
                console.log(response.data.results);
                setMovies(response.data.results)
            })
            .catch(err => {
                // alert(err)
            })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || "")
                .then((url) => {
                    console.log(url);

                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch(err => console.log(err))
        }
    }

    let poster;

    if (props.class === "posters__poster") {
        poster = true;
    }
    if (props.class === "posters__smallPoster") {
        poster = false;
    }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map(obj =>
                    <img onClick={() => handleClick(obj)} className={props.class} src={poster ? `${imageURL + obj.poster_path}` : `${imageURL + obj.backdrop_path}`} alt={obj.title} />
                )}
            </div>
            { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default RowPost
