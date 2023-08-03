import Link from "next/link";
import React from "react";
import styles from "./styles/not-found.module.css";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <h1>404</h1>
      <h2>Not Found</h2>
      <p>Could not found requested resource</p>
      <Link href="/">
        <button>Go to Home page</button>
      </Link>
    </div>
  );
};

export default NotFound;
