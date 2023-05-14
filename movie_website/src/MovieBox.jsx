import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import './MovieBox.css'

const API_URL = "https://swapi.dev/api/films"

function MovieBox({ title, release_date, opening_crawl }) {

  return (
    <Card className="movie" style={{ width: '24rem' }}>
      <Card.Body className="all">
        <Card.Title className='title'>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{release_date}</Card.Subtitle>
        <Card.Text className="text">
          {opening_crawl}
        </Card.Text>
        <hr className='line'></hr>
        <Card.Link href="#" className='link'>More Info</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MovieBox

