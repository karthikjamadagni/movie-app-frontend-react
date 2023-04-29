import React from 'react';
import "./Header.css";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";


const togglemenu = ()=>{
    document.getElementById('sidebar').classList.toggle('active')
}





const changeColor1 =()=>{
    let a = document.getElementById('popular');
    let b = document.getElementById('tr');
    let c = document.getElementById('upcoming');

    c.style.color = "#fff";
    b.style.color = "#fff";
    a.style.color = "red";

}



const Header = ({user, setLoginUser ,favorites, setFavorites}) => {

    const navigate = useNavigate();

    const handleLogin = ()=>{
        if(user._id!=null){
            navigate('/movies/favorites');
            
        }
        else{
            alert("Log in FIrst");
            navigate('/login');
        }
        

    }

    return ( 
        <div className="header">
            <div className="headerleft">
                <button className='favorite'><Link to='/'><span>MyMovies</span></Link></button>
                <button className='favorite'><Link to='/movies/popular' onClick={changeColor1} id='popular'><span>Popular</span></Link></button>
                <button className='favorite'><Link to='/movies/top_rated' id='tr'><span>Top Rated</span></Link></button>
                <button className="favorite"><Link to='/movies/upcoming' id='upcoming'><span>Upcoming</span></Link></button>
                <button className="favorite search"><Link to='/movies/search' id='search'><span>Search Movies</span></Link></button>
                <button className ="favorite" onClick={handleLogin}><span>Favorites</span></button>
            </div>
            <div className="headerRight">
                {/* <Link to='/login'>{user && user._id?
                (<span>Hello, {user.name}</span>)
                    :
                (<span>Login</span>)}
                </Link> */}
                {
                    user && user._id? <><span>Hello, {user.name}</span><button className='favorite' onClick={()=>setLoginUser({})}>Logout</button></> : <button className='favorite login'><Link to='/login'><span>Login</span></Link></button>
                }
            </div>
        </div>
     );
}
 
export default Header;


//         987e4fe024bae9b04d7c210bc2d46361
