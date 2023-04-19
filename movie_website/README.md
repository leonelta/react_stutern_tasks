API URL = "https://swapi.dev/api/films"

<div className=''>
      <h1>{title}</h1>  
      <h4>{release_date}</h4>
      <p>{opening_crawl}</p>
    </div>

        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{release_date}</Card.Subtitle>
        <Card.Text>
          {opening_crawl}
        </Card.Text>
        <Card.Link href="#">More Info</Card.Link>   

        <Card.Img src="src/download.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className='mb-2'>{release_date}</Card.Subtitle>
        <Card.Text>
          {opening_crawl}
        </Card.Text>
        <Card.Link href="#">More Info</Card.Link>   
      </Card.ImgOverlay> 