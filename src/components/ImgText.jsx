import React from "react";
import styles from "./ImgText.module.css";

function ImgText(props) {
  return (
    <div className={styles.main}>
      <div className={styles.textimg}>
        <div>
          <img className={styles.img} src={props.src} alt="img" />
        </div>
        <div>
          <h1>{props.heading}</h1>
          <h4>{props.text}</h4>
        </div>
      </div>
    </div>
  );
}

export default ImgText;
