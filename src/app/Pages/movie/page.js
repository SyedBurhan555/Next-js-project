import MovieCard from "@/app/components/MovieCard";
import React from "react";
import style from "../../styles/Movie.module.css";

const Movie = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "240066afedmshfd5c52b6e5c58cap136adbjsn52464b470486",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  // console.log(main_data.jawSummary);

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: 17 }}>Series & Movie</h1>
      <div className={style.Movie}>
        {main_data.map((curElem) => {
          return <MovieCard key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default Movie;
