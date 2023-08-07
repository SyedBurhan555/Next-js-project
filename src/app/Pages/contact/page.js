import React from "react";
import styles from "../../styles/contact.module.css";
import ContactCard from "@/app/components/ContactCard";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <h1 className={styles.contactHeading}>Contact us</h1>
      <div className={styles.ContactData}>
        <ContactCard
          icon={<MdEmail className={styles.ContactIcons} />}
          heading="Email"
          days="Monday to Friday Expected"
          time="response time 72 hours"
          button="Send Email"
        />
        <ContactCard
          icon={<MdVoiceChat className={styles.ContactIcons} />}
          heading="Live Chat"
          days="Wednesday : 9 AM - 6 PM"
          time="Weekends 9 AM - 5 PM"
          button="Chat Now"
        />
        <ContactCard
          icon={<MdForum className={styles.ContactIcons} />}
          heading="Community Forum"
          days="Monday to Friday Expected"
          time="response time 72 hours"
          button="Ask the Community"
        />
      </div>
      <h2 className={styles.heading2}>
        We'd love to hear <span style={{ color: "red" }}>from you</span>
      </h2>
    </div>
  );
};

export default Contact;
