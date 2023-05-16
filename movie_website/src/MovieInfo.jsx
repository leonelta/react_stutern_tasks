import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Details from "./details.json";
import "./MovieInfo.css";

function MovieInfo() {
  const navigate = useNavigate();

  const navigateToMovieBox = () => {
    navigate("/");
  };

  return (
    <div className="container">
      {Details &&Details.map((movie) => {
        return (
          <div className="head" key={ movie.id }>
            <button onClick={navigateToMovieBox}> Back to List</button>
            <h1 className="title1"> {movie.title}</h1>
            <p className="direct">
              <span>Director: { movie.director }</span>
            </p>
            <p className="producer">
              <span>Producer: { movie.producer }</span>
            </p>
            <div className="descrip">
              <h3>Description</h3>
              <p>{ movie.opening_crawl }</p>
            </div>
            <hr></hr>
            <div className="character">
              <h3>Characters</h3>
              <ul>
                {movie.characters && movie.characters.map((name, index) => {
                  return(
                    <ul>
                      <li key={ index }>{ name }</li>
                    </ul>
                  )
                })}
              </ul>
            </div>
            <hr></hr>
            <div className="planet">
              <h3>Planets</h3>
              <ul>
                {movie.planets && movie.planets.map((name, index) => {
                  return(
                    <ul>
                      <li key={ index }>{ name }</li>
                    </ul>
                  )
                })}
              </ul>
            </div>
            <hr></hr>
            <div className="species">
              <h3>Species</h3>
              <ul>
                {movie.species && movie.species.map((name, index) => {
                  return(
                    <ul>
                      <li key={ index }>{ name }</li>
                    </ul>
                  )
                })}
              </ul>
            </div>
            <hr></hr>
            <div className="starships">
              <h3>Starships</h3>
              <ul>
                {movie.starships && movie.starships.map((name, index) => {
                  return(
                    <ul>
                      <li key={ index }>{ name }</li>
                    </ul>
                  )
                })}
              </ul>
            </div>
            <hr></hr>
            <div className="vehicles">
              <h3>Vehicles</h3>
              <ul>
                {movie.vehicles && movie.vehicles.map((name, index) => {
                  return(
                    <ul>
                      <li key={ index }>{ name }</li>
                    </ul>
                  )
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieInfo;
