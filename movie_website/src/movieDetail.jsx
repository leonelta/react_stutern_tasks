import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const movieDetail = (props) => {
  
  const { episode_id } = useParams();
  const [context, setContext] = useState([]);
  

  useEffect(() => {
    const reponse = fetch(`https://swapi.dev/api/films/${episode_id}`).then((res) => res.json())
    .then(data => setContext(data.results))
  }, [])

  

  return (
    <div className='container'>
        <h1 className='title'> {context.title}</h1> 
        <p className='direct'><span>Director: {context.director}</span></p>
        <p className='producer'><span>Director: {context.producer}</span></p> 
        <h3>Description</h3>
        <p>{context.opening_crawl}</p>    
        <h3>Characters</h3>
        <ul>
            <li>{context.characters[0]}</li>
            <li>{context.characters[0]}</li>
            <li>{context.characters[0]}</li>
            <li>{context.characters[0]}</li>
            <li>{context.characters[0]}</li>
        </ul>
        <h3>Planets</h3>
        <h3>Species</h3>
        <h3>Starships</h3>
        <h3>Vehicles</h3>
    </div>
  )
}

export default movieDetail
