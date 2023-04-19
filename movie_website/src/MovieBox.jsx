import React from 'react';

const MovieBox = ({title, release_date, opening_crawl}) => {
  return (
    <div>
      <h1>{title}</h1>  
      <h4>{release_date}</h4>
      <p>{opening_crawl}</p>
    </div>
  )
}

export default MovieBox

