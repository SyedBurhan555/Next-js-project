import React from "react";
import styles from "../styles/contactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <form>
        <label>Enter Your Name</label>
        <input required />
        <label>Enter Your Email</label>
        <input required />
        <label>Phone Number</label>
        <input required />
        <label>Message</label>
        <textarea required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
