import React from "react";
import heroSection from "../styles/heroSection.module.css";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className={heroSection.heroSection}>
      <div className={heroSection.row}>
        <div className={heroSection.rightCol}>
          <h1>
            LET'S WATCH MOVIE
            <br /> TOGETHER
          </h1>
          <p className={heroSection.para}>
            From award-winning dramas to blockbuster action movies, we've got
            you covered. Browse our selection of the latest and greatest movies,
            and find your new favorite today.
          </p>
          <Link href="/Pages/movie">
            <button className={heroSection.btn}>Explore Movies</button>
          </Link>
        </div>
        <div className={heroSection.leftCol}>
          <img
            alt="watching netflix"
            loading="lazy"
            width="600"
            height="600"
            decoding="async"
            data-nimg="1"
            src={"/home.svg"}
          />
        </div>
      </div>
      <div className={heroSection.wave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,0L48,21.3C96,43,192,85,288,90.7C384,96,480,64,576,42.7C672,21,768,11,864,21.3C960,32,1056,64,1152,85.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
