import React from "react";
import styles from "../styles/links.module.css";
import Link from "next/link";

const Links = ({ heading, link1, link2, link3, link4 }) => {
  return (
    <div className={styles.links}>
      <div className={styles.row}>
        <h2 className={styles.linksHeading}>{heading}</h2>
        <li>
          <Link href="">{link1}</Link>
        </li>
        <li>
          <Link href="">{link2}</Link>
        </li>
        <li>
          <Link href="">{link3}</Link>
        </li>
        <li>
          <Link href="">{link4}</Link>
        </li>
      </div>
    </div>
  );
};

export default Links;
