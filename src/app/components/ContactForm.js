"use client";
import { useEffect, useState } from "react";
import styles from "../styles/contactForm.module.css";

const ContactForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(user);5
    setUser((pre) => ({ ...pre, [name]: value }));
  };
  useEffect(() => {
    console.log("user-data", user);
  }, []);

  const onSubmit = () => {};
  return (
    <div className={styles.contactForm}>
      <form>
        <label>Enter Your Name</label>
        <input
          required
          autoComplete="off"
          value={user.name}
          name="name"
          onChange={onChangeHandler}
        />
        <label>Enter Your Email</label>
        <input
          required
          autoComplete="off"
          value={user.email}
          name="email"
          onChange={onChangeHandler}
        />
        <label>Phone Number</label>
        <input
          required
          type="number"
          autoComplete="off"
          value={user.phone_number}
          name="phone_number"
          onChange={onChangeHandler}
        />
        <label>Message</label>
        <textarea
          required
          autoComplete="off"
          name="message"
          value={user.message}
          onChange={onChangeHandler}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
