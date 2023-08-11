import React from "react";
import styles from "../styles/footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Links from "./Links";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerRow}>
        <h1>Main Heading</h1>
        <div className={styles.socialIcons}>
          <FaFacebookF className={styles.socialLinks} />

          <FaTwitter className={styles.socialLinks} />

          <FaInstagram className={styles.socialLinks} />

          <FaLinkedinIn className={styles.socialLinks} />

          <FaYoutube className={styles.socialLinks} />
        </div>
      </div>
      <div className={styles.footerLinksRow}>
        <div className={styles.footerCol1}>
          <Links
            heading={"Company"}
            link1={"Home"}
            link2={"Contact"}
            link3={"Movie"}
            link4={"About"}
          />
        </div>
        <div className={styles.footerCol2}>
          <Links
            heading={"Services"}
            link1={"App design"}
            link2={"Web design"}
            link3={"Logo design"}
            link4={"Banner design"}
          />
        </div>
        <div className={styles.footerCol3}>
          <Links
            heading={"Account"}
            link1={"Profile"}
            link2={"My Account"}
            link3={"Prefrence"}
            link4={"Purchase"}
          />
        </div>
        <div className={styles.footerCol4}>
          <Links
            heading={"Course"}
            link1={"HTML & CSS"}
            link2={"JavaScript"}
            link3={"React js"}
            link4={"Node js"}
          />
        </div>
        <div className={styles.footerCol5}>
          <h2>Subscribe</h2>
          <form>
            <input
              required
              placeholder="Enter Your Email"
              className={styles.footerInputs}
            />
            <button type="submit" className={styles.footerBtn}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
