import React from "react";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./card1.css";
const Card1 = ({movie, favorites, setFavorites, user, getdbfavs})=>{

    let navigate = useNavigate();


    const removefavorite = ()=>{
        axios.post('https://movie-backend2-cbib.onrender.com/rmfavorites', {movie, user});
        getdbfavs();
    }

    



const[loading, setIsLoading] = useState(true);

useEffect(()=>{
    setTimeout(()=>{
        setIsLoading(false);
    }, 1500)
}, [])


return <>
    {
        loading
        ?
        <div className="cards">
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={2} duration={3}></Skeleton>
                </SkeletonTheme>
        </div>
        :
        <button className="card1-btn">
            <div className="cards1">
                <img className="cards__img1" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="Poster Not Found" />
                <div className="cards__overlay1">
                    <div className="card__title1"><button  className="rem-btn" onClick={removefavorite}>Remove From Favorites</button></div>
                    <div className="card__runtime1">
                        <span className="card__rating1">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description1"><Link to={`/movie/${movie.id}`}>Go to Movie</Link></div>
                </div>
            </div>
        </button>
    }
     </>
    }


    export default Card1;





   