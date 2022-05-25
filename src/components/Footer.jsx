import React from "react";
import styles from "./Footer.module.css";

function Footer(props) {
  return (
    <div className={styles.footerMain}>
      <div>Questions? Call 000-800-040-1843</div>
      <div className={styles.middleContent}>
        <div>
          <div>FAQ</div>
          <div>Investor Relations</div>
          <div>Privacy</div>
          <div>Speed Test</div>
        </div>
        <div>
          <div>Help Centre</div>
          <div>Jobs</div>
          <div>Cookie Preferences</div>
          <div>Legal Notices</div>
        </div>
        <div>
          <div>Account</div>
          <div>Ways to Watch</div>
          <div>Corporate Information</div>
          <div>Only on Netflix</div>
        </div>
        <div>
          <div>Media Centre</div>
          <div>Terms of Use</div>
          <div>Contact Us</div>
        </div>
      </div>
      <div>Netflix India</div>
    </div>
  );
}

export default Footer;
