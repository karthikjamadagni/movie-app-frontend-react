import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Footer from './pages/footer/footer';
import Search from './pages/search/search';
import Login from './components/login/login';
import Register from './components/register/register';
import { useState } from 'react';
import Favorites from './pages/favorites/favorites';

function App() {

  const [user, setLoginUser] = useState({})
  const[favorites, setFavorites] = useState([])
  return (
    <div className="App">
     <Router>
      <Header user = {user} setLoginUser={setLoginUser}  favorites={favorites} setFavorites={setFavorites}/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='movie/:id' element={<Movie favorites={favorites} setFavorites={setFavorites} user={user} setLoginUser = {setLoginUser}/>} style={{textDecoration: "none"}}></Route>
        <Route path='movies/:type' element={<MovieList/>} style={{textDecoration: 'none'}}></Route>
        <Route path='movies/*' element={<h1>Error</h1>} style={{textDecoration: 'none'}}></Route>
        <Route path='movies/search' element={<Search/>}> </Route>
        <Route path='/login' element={<Login setLoginUser={setLoginUser} />}></Route>
        <Route path='/register' element={<Register setLoginUser={setLoginUser}/>}></Route>
        <Route path='/movies/favorites' element={<Favorites favorites={favorites} setFavorites={setFavorites} user={user}/>}></Route>
      </Routes>
       <Footer user={user}/>  
     </Router>
    </div>
  );
}

export default App;
