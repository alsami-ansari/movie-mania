import './App.css'
import MovieUI from './MovieUI';
import Search from "./Search.svg"
import { useState, useEffect } from 'react';



const API = "https://www.omdbapi.com/?apikey=2233bb0d"

function App() {

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);


    useEffect(() => {
      searchmovies("Avengers");
    }, []);
 


  


  const searchmovies = async (title)=>{
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchmovies(search);
    }
  };
 
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>

    <div className="container">

      <h1 onClick={handleRefresh}>Movie Mania</h1>

      <div className="search">

        <input value={search}
            onChange={(e) => setSearch(e.target.value)}  onKeyDown={handleKeyDown}   placeholder='Search' />

        <img src={Search} onClick={() => searchmovies(search)} alt=""  />



      </div>

      {movies?.length > 0 ? (
          <div className="cards">
            {movies.map((movie, index) => (
            <MovieUI key={index} movie={movie}/>
            ))}
          </div>
        ) : (
          <div className="notfound">
            <h2>No movies found</h2>
          </div>
        )}





    </div>
    
    </>
  )
}

export default App
