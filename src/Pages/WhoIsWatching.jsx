import React from "react";
import { Link } from "react-router-dom";
import styles from "./WhoIsWatching.module.css";
import UserA from "../assests/usera.png";
import UserB from "../assests/userb.png";
import UserC from "../assests/userc.png";
import UserD from "../assests/userd.png";
import UserE from "../assests/usere.png";
import NetflixLogo from "../assests/Netflix-Logo.png";

function WhoIsWatching() {
  return (
    <div>
      <div className={styles.logoDiv}>
        <div>
          <Link to="/">
            <img className={styles.logo} src={NetflixLogo} alt="netflix-logo" />
          </Link>
        </div>
      </div>
      <div className={styles.main}>
        <div className="animate__animated animate__fadeIn">
          <h1>Who's watching?</h1>
        </div>
        <div className={styles.wisContainer}>
          <div className={styles.usera}>
            <Link to="/browse">
              <img
                className={`animate__animated animate__fadeIn ${styles.img}`}
                src={UserA}
                alt="userA"
              />
            </Link>
          </div>
          <div className={styles.userb}>
            <Link to="/browse">
              <img
                className={`animate__animated animate__fadeIn ${styles.img}`}
                src={UserB}
                alt="userB"
              />
            </Link>
          </div>
          <div className={styles.userc}>
            <Link to="/browse">
              <img
                className={`animate__animated animate__fadeIn ${styles.img}`}
                src={UserC}
                alt="userC"
              />
            </Link>
          </div>
          <div className={styles.userd}>
            <Link to="/browse">
              <img
                className={`animate__animated animate__fadeIn ${styles.img}`}
                src={UserD}
                alt="userD"
              />
            </Link>
          </div>
          <div className={styles.usere}>
            <Link to="/browse">
              <img
                className={`animate__animated animate__fadeIn ${styles.img}`}
                src={UserE}
                alt="userE"
              />
            </Link>
          </div>
        </div>
        <div>
          <button className="btn btn-outline-secondary">Manage Profiles</button>
        </div>
      </div>
    </div>
  );
}

export default WhoIsWatching;
