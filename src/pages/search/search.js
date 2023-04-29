import { useEffect, useState } from "react";
import Card from "../../components/card/card";
import Searchbox from "./searchbox";

const Search = () => {

    const[movies, setMovies] = useState([]);

    const [searchValue, setSearchValue] = useState('');
    const getMovieRequest = async()=>{
        const url = `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${searchValue}&page=1&include_adult=false`;
        const res = await fetch(url);
        const resjson = await res.json();
        setMovies(resjson.results);
    }

    useEffect(()=>{
        getMovieRequest();
    }, [searchValue])
    return (
        <>
        <Searchbox searchValue={searchValue} setSearchValue = {setSearchValue} /> 
         <div className="movie__list">
            <div className="list__cards">
                {
                    movies.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div> 
        </>
    )
}
 
export default Search;

