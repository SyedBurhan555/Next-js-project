import styles from "../../styles/contact.module.css";
import ContactCard from "@/app/components/ContactCard";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import ContactForm from "@/app/components/ContactForm";

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
      <div className={styles.contactForm}>
        <ContactForm />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.316152296496!2d67.13120727638268!3d24.887195444185334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eafe2ecc311%3A0x8213daf29adc6923!2sShahrah-e-Faisal%20Rd%2C%20Faisal%20Cantonment%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1691407752580!5m2!1sen!2s"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
