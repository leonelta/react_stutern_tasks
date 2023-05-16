import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import './MovieBox.css';

import Details from './details.json';
import 'bootstrap/dist/css/bootstrap.min.css';


function MovieBox() {

  const navigate = useNavigate();

  const navigateToMovieInfo = () => {
    navigate('/MovieInfo');
  }


  return (
    <div className='grid'>
      {
        Details && Details.map( detail => {
          return (
            <Card className="movie" style={{ width: '24rem' }} key={ detail.id }>
              <Card.Body className="all">
                <Card.Title className='title'>{detail.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{detail.release_date}</Card.Subtitle>
                <Card.Text className="text">
                  {detail.opening_crawl}
                </Card.Text>
                <hr className='line'></hr>
                <button onClick={navigateToMovieInfo}> More infos</button>
              </Card.Body>
            </Card>    
          )
        })
      }
    </div>
  );
}

export default MovieBox

