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
      {Details.map((movie) => {
        return (
          <div className="head" key={ movie.id }>
            <button onClick={navigateToMovieBox}> Back to List</button>
            <h1 className="title"> {movie.title}</h1>
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
          </div>
        );
      })}
    </div>
  );
}

export default MovieInfo;
