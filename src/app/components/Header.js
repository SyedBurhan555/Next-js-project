import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.main}>
      <nav className={styles.nav_row}>
        <Link href="/" className={styles.logo}>
          <Image
            alt="logo"
            src="/logo.webp"
            width={120}
            height={20}
            className={styles.logo_image}
          />
        </Link>
        <ul className={styles.nav_name}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Pages/contact">Contact</Link>
          </li>
          <li>
            <Link href="/Pages/movie">Movie</Link>
          </li>
          <li>
            <Link href="/Pages/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
