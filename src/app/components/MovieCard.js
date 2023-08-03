import Link from "next/link";
import styles from "../styles/MovieCard.module.css";

const MovieCard = (curElem) => {
  const { id, type, title, synopsis } = curElem.jawSummary;
  return (
    <>
      <div className={styles.MovieCard}>
        <img
          src={curElem.jawSummary.backgroundImage.url}
          alt={title}
          loading="lazy"
        />
        <h2>{title}</h2>
        <p>{`${synopsis.substring(0, 66)} ...`}</p>
        {/* <p>{synopsis}</p> */}
        <Link href={`movie/${id}`}>
          {/* <Link href=""> */}
          <button>Read More</button>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
