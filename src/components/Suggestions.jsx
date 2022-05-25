import React from "react";
import styles from "./Suggestions.module.css";
import MovieCard from "./MovieCard";
import MovieA from "../assests/moviea.webp";
import MovieB from "../assests/movieb.webp";
import MovieC from "../assests/moviec.webp";
import MovieD from "../assests/movied.jpg";
import MovieE from "../assests/moviee.webp";
import MovieF from "../assests/movief.webp";

function Suggestions(props) {
  return (
    <div className={styles.main}>
      <div>
        <b>{props.heading}</b>
      </div>
      <div className={styles.movies}>
        <MovieCard src={MovieA} name="Friends" />
        <MovieCard src={MovieB} name="The Office"/>
        <MovieCard src={MovieC} name="Community"/>
        <MovieCard src={MovieD} name="Space Force"/>
        <MovieCard src={MovieE} name="Super Store"/>
        <MovieCard src={MovieF} name="Good Place"/>
      </div>
    </div>
  );
}

export default Suggestions;
