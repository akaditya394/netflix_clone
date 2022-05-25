import React from "react";
import styles from "./TextImg.module.css";

function TextImg(props) {
  return (
    <div className={styles.main}>
      <div className={styles.textimg}>
        <div>
          <h1>{props.heading}</h1>
          <h4>{props.text}</h4>
        </div>
        <div>
          <img className={styles.img} src={props.src} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default TextImg;
