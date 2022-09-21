import { React, useEffect, useState } from "react";
import searchIcon from './search.svg';
import MovieCard from './MovieCard';
const API_URL = "https://www.omdbapi.com/?apikey=d165bfb1&";
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');

    const searchMovies = async (title) => {
        const reponse = await fetch(`${API_URL}s=${title}`);
        const data = await reponse.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies("Batman")
    }, []);


    return (


        <div className="app">
            <h1>Movie land</h1>
            <div className="search">
                <input placeholder="Search Movies" value={searchTitle} onChange={(e) =>  setSearchTitle(e.target.value)} />
                <img src={searchIcon} alt="search" onClick={()=> searchMovies(searchTitle) } />
            </div>
            {
                (movies.length > 0)
                    ? (
                        <div className="container">

                            {
                                movies.map(function(movie){
                                return (<MovieCard movie={movie} />)
                                }
                                )}
                        </div>
                    )
                    :
                    (
                        <div className="empty">
                            <h2> No Movies Found </h2>
                        </div>
                    )
            }
        </div>
    )
};
export default App;