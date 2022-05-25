import React from "react";
import styles from "./Navbar.module.css";
import NetflixLogo from "../assests/Netflix-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import UserA from "../assests/usera.png";

function Navbar(props) {
  return (
    <div className={props.className}>
      <div className={styles.navbar}>
        <div className={styles.leftSide}>
          <div>
            <img className={styles.img} src={NetflixLogo} alt="logo" />
          </div>
          <div className={styles.items}>
            <b>Home</b>
          </div>
          <div className={styles.items}>TV Shows</div>
          <div className={styles.items}>Movies</div>
          <div className={styles.items}>New & Popular</div>
          <div className={styles.items}>My Lists</div>
          <div className={styles.items}>Browse by Languages</div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.items}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className={styles.items}>
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className={styles.items}>
            <img className={styles.profilePic} src={UserA} alt="profile-pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
