import React from "react";
import styles from "./MovieCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus, faDownload } from "@fortawesome/free-solid-svg-icons";

function MovieCard(props) {
  return (
    <div className={styles.movieCard}>
      <img className={styles.img} src={props.src} alt="movie" />
      <div className={styles.main}>
        <div className={styles.text}>
          <b>{props.name}</b>
        </div>
        <div className={styles.match}>
          <b>93% Match</b>
        </div>
        <div className={styles.name}>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faDownload} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
