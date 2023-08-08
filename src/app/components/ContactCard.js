import React from "react";
import styles from "../styles/contactCard.module.css";

const ContactCard = ({ icon, heading, days, time, button }) => {
  // console.log("heelo next js");
  return (
    <div className={styles.ContactCard}>
      <i>{icon}</i>
      <h3>{heading}</h3>
      <p>{days}</p>
      <p>{time}</p>
      <p>
        {button} <span>-&gt;</span>
      </p>
    </div>
  );
};

export default ContactCard;
