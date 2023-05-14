import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import './MovieBox.css'


function MovieBox({ title, release_date, opening_crawl }) {

  const API_URL = "https://swapi.dev/api/films";

  const navigate = useNavigate();

  const navigateToMovieInfo = () => {
    navigate('/MovieInfo');
  }


  return (
    <Card className="movie" style={{ width: '24rem' }}>
      <Card.Body className="all">
        <Card.Title className='title'>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{release_date}</Card.Subtitle>
        <Card.Text className="text">
          {opening_crawl}
        </Card.Text>
        <hr className='line'></hr>
        <button onClick={navigateToMovieInfo}> More infos</button>
      </Card.Body>
    </Card>    
  );
}

export default MovieBox

