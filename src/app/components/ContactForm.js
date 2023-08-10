"use client";
import { useState } from "react";
import styles from "../styles/contactForm.module.css";

const ContactForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((pre) => ({ ...pre, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          phone_number: user.phone_number,
          message: user.message,
        }),
      });
      if (response.status === 201) {
        setUser({
          name: "",
          email: "",
          phone_number: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
        alert("Something went wrong");
      }
      // return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.contactForm}>
      <form onSubmit={onSubmit}>
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
        {status === "success" && (
          <p className={styles.success}>Thank You for your message</p>
        )}
        {status === "error" && (
          <p className={styles.error}>
            There was an error submitting your message
          </p>
        )}
        <button type="submit" disabled>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
