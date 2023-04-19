import React, { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';


const API_URL = "https://swapi.dev/api/films"

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL).then((res) => res.json())
    .then(data => {
      console.log(data)
      setMovies(data.results);
    })
  }, [])

  return (
    <div>  
       {movies.map((movieReq) => 
       <MovieBox key={movieReq.episode_id} {...movieReq}/>)}
    </div>
  )
}

export default App
