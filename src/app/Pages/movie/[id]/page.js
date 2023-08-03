import React from "react";
import Link from "next/link";
import styles from "../../../styles/MovieCard.module.css";

const SingleData = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "240066afedmshfd5c52b6e5c58cap136adbjsn52464b470486",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_Data = data[0].details;
  console.log("singleData", main_Data);
  return (
    <div className={styles.MovieCard}>
      <h1>
        Netflix \ <span style={{ color: "red" }}>{main_Data.type}</span>
      </h1>
      <img src={main_Data.backgroundImage.url} alt={main_Data.title} />
      <h2>{main_Data.title}</h2>
      <p>{main_Data.synopsis}</p>
      <p>
        Creators:
        {main_Data.creators.map((n) => n.name + " ") || "not Available"}
      </p>
      {/* <p>writer :{main_Data.writers.map((n) => n.name) || "not Available"}</p> */}
      <p>Cast : {main_Data.cast.map((n) => n.name + " ") || "not Available"}</p>
      <p>Release : {main_Data.releaseYear}</p>
    </div>
  );
};

export default SingleData;
