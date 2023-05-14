import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router';

function MovieInfo(title, director, producer, opening_crawl, Species, characters, Starships, planets, Vehicles) {

  const { episode_id } = useParams();
  const navigate = useNavigate();
  const [context, setContext] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigateToMovieBox = () => {
    navigate('/MovieBox');
  }
  

  useEffect(() => {
    LoadData();
  }, [])
  const LoadData = async () => {
    await fetch("https://swapi.dev/api/films/${episode_id}")
    .then(response => response.json())
    .then(data => setContext(data));
  }

  return (
    <div className='container'>
      <button onClick={navigateToMovieBox}> Back to List</button>
      <h1 className='title'> {title}</h1> 
      <p className='direct'><span>Director: {director}</span></p>
      <p className='producer'><span>Director: {producer}</span></p> 
      <h3>Description</h3>
      <p>{opening_crawl}</p>   
      <h3>Characters</h3>
      <ul>
        {context.characters.map(character => {
          <li key={character.url}>{character.name}</li>
        })}
      </ul>
      <h3>Planets</h3>
        {context.planets.map(planet => {
          <li key={planet.url}>{planet.name}</li>
        })}
      <h3>Species</h3>
      <h3>Starships</h3>
      <h3>Vehicles</h3>
    </div>
  )
}

export default MovieInfo