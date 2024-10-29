import Image from "next/image";
import styles from "@/app/css/navigation/nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav__main}>
      <a href="/">
        <Image
          src={"/amazing-street-burgers.png"}
          width={200}
          height={200}
          alt="Amazing Street Burguers Logo"
        />
      </a>
      <a href="/about">Abouts</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}
