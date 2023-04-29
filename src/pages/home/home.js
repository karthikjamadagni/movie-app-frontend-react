import React from 'react';
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import {useState, useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom";

const Home = ()=>{
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=987e4fe024bae9b04d7c210bc2d46361')
        .then(res=> res.json())
        .then(data=> setPopularMovies(data.results))
    }, [])

    return(
         <div className="poster">
            <Carousel
                showThumbs={true}
                showIndicators={true}
                autoPlay = {true}
                transitionTime={1}
                infiniteLoop = {true}
                showStatus={false}
                >
                {
                    popularMovies.map(movie=>(
                        <Link style={{textDecoration:"none",color:"white"}}  to={`/movie/${movie.id}`}>
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
                            </div>
                            <div className="posterImage__Overlay">
                            <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                            <div className="posterImage__runtime">
                                {movie ? movie.release_date: " "}
                                <span className="posterImage_rating">
                                    {movie? movie.vote_average: ""}
                                    <i className="fas fa-star"/>{" "}
                                </span>
                            </div>
                                <div className="posterImage_description">{movie?movie.overview: ""} </div>
                            </div>
                        </Link>
                    ))
                }
                </Carousel>

         </div>
    );
}

export default Home;









