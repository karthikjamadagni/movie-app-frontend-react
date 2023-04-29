import { useEffect } from "react";
import { useState } from "react";
import Card1 from "../../components/card1/card1";
import { useNavigate } from "react-router-dom";
import './favorites.css';
import axios from "axios";


const Favorites = ({favorites, setFavorites, user}) => {
    let navigate = useNavigate();

    if(user&user._id==null){
        navigate('/');
    }

    const getdbfavs = () => {
         axios.post('https://movie-backend2-cbib.onrender.com/fetchfavorites', {user})
         .then((res)=>setFavorites(res.data.message))

    
      // render the favorites data
    }

    useEffect(()=>{
        const getdbfavs1 = () => {
            axios.post('https://movie-backend2-cbib.onrender.com/fetchfavorites', {user})
            .then((res)=>setFavorites(res.data.message))
   
       
         // render the favorites data
       }
       return ()=>{
        getdbfavs1();
       }
       //eslint-disable-next-line
    }, [])
    

    return <>
    <h1 className="favorite-heading">Your Favorites</h1>
    <div className="movie__list">
            <div className="list__cards">
                {
                    favorites&&favorites.map(movie => (
                        <Card1 movie={movie} favorites={favorites} setFavorites={setFavorites}  user={user} getdbfavs={getdbfavs}/>
                        
                    ))
                }
            </div>
        </div> 
    </>
}
 
export default Favorites;