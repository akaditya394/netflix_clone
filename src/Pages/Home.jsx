import React from "react";
import styles from "./Home.module.css";
import FAQ from "../components/FAQ";
import NavbarNL from "../components/NavbarNL";
import Footer from "../components/Footer";
import Button from "../components/Button";
import TextImg from "../components/TextImg";
import ImgText from "../components/ImgText";
import imgA from "../assests/Img-a.png";
import imgB from "../assests/Img-b.png";
import imgC from "../assests/Img-c.png";
import imgD from "../assests/Img-d.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.upper}>
      <div className={styles.main}>
        <div className={styles.nav}>
          <NavbarNL />
        </div>
        <div className={styles.cta}>
          <div>
            <h1>Unlimited movies, TV</h1>
            <h1>shows and more.</h1>
          </div>
          <div>
            <h3>Watch anywhere. Cancel anytime.</h3>
          </div>
          <div>
            <h5>Ready to watch? Sign In to continue!</h5>
          </div>
          <div>
            <Link to="/whoiswatching">
              <Button>Sign In</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <TextImg
          src={imgA}
          heading="Enjoy on your TV."
          text=" Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more."
        />
        <ImgText
          src={imgC}
          heading="Download your shows to watch offline."
          text="Save your favourites easily and always have something to watch."
        />
        <TextImg
          src={imgB}
          heading="Watch everywhere."
          text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        />
        <ImgText
          src={imgD}
          heading="Create profiles for children."
          text="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        />
      </div>
      <div className={styles.lower}>
        <div className={styles.faqtext}>
          <h1 className={styles.faqheading}>Frequently Asked Questions</h1>
        </div>
        <FAQ className={styles.faq} />
        <div className={styles.cta}>
          <div>
            <h3>Watch anywhere. Cancel anytime.</h3>
          </div>
          <div>
            <h5>Ready to watch? Sign In to continue!</h5>
          </div>
          <div>
            <Link to="/whoiswatching">
              <Button>Sign In</Button>
            </Link>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
