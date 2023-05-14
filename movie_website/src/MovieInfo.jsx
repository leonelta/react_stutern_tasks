import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

function MovieInfo() {

  const { episode_id } = useParams();
  const navigate = useNavigate();
  const [context, setContext] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigateToMovieBox = () => {
    navigate('/MovieBox');
  }

  const fetchData = async (urls) => {
    const results = await Promise.all(urls.map((url) => axios.get(url)));
    return results.map((res) = res.data);
  }

  useEffect(() => {
    const LoadInfo = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
           "https://swapi.dev/api/films" 
        );
        const Info = response.data;

        const [characters, species, planets, starships, vehicles] = 
          await Promise.all([
            fetchData(Info.characters),
            fetchData(Info.species),
            fetchData(Info.planets),
            fetchData(Info.starships),
            fetchData(Info.vehicles),
         ]);

        setContext({
          ...Info,
          characters,
          species,
          planets, 
          starships, 
          vehicles,
        });
        console.log(context);
      } catch (err) {
        console.error(err.message);
        setContext(null);
      } finally {
        setLoading(false)
      }
    }

    LoadInfo();
  }, [episode_id]);

  return (
    <div className='container'>
      {
        loading ? (
           <h4>...</h4>
        ) : (
           <div className='head'>
            <button onClick={navigateToMovieBox}> Back to List</button>
              <h1 className='title'> {context.title}</h1> 
              <p className='direct'><span>Director: {context.director}</span></p>
              <p className='producer'><span>Director: {context.producer}</span></p> 
              <div>
                <h3>Description</h3>
                <p>{context.opening_crawl}</p>
              </div>
              <div>
                <h3>Characters</h3>
                <ul>
                    {context.map((character) => {
                      <li key={character.url}>{character.name}</li>
                    })}
                </ul>
              </div>
              <div>
               <h3>Planets</h3>
                <ul>
                  {context.map((planet) => {
                    <li key={planet.url}>{planet.name}</li>
                  })}
                </ul>
              </div>
              <div>
               <h3>Species</h3>
                <ul>
                  {context.map((specie) => {
                    <li key= {specie.url}>{specie.name}</li>
                  })}
                </ul>
              </div>
              <div>
               <h3>Starships</h3>
                <ul>
                  {context.map((starship) => {
                    <li key={starship.url}>{starship.name}</li>
                  })}
                </ul>
              </div>
              <div>
               <h3>Planets</h3>
                <ul>
                  {context.map((vehicle) => {
                    <li key={vehicle.url}>{vehicle.name}</li>
                  })}
                </ul>
              </div>
           </div>
        )
      }
    </div>
  )
}

export default MovieInfo