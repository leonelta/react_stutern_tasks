import React from 'react';
import Card from 'react-bootstrap/Card'
import './MovieBox.css'

const MovieBox = ({title, release_date, opening_crawl}) => {
  return (
    <Card style={{ width: '24rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{release_date}</Card.Subtitle>
        <Card.Text>
          {opening_crawl}
        </Card.Text>
        <Card.Link href="#">More Info</Card.Link>   
      </Card.Body>
    </Card>
  )
}

export default MovieBox

