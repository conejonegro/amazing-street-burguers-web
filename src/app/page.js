import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image
              className={styles.logo__ASB}
              src="/asb-logo-IA.svg"
              alt="Vercel logomark"
              width={200}
              height={200}
            />
      <main className={styles.main}>
        <ol>
          <li>
           Bienvenido a Amazing Street Burguers Web.
          </li>
          <li>Descubre como estan hechas nuestras Hamburguesas</li>
        </ol>

        <div >
            Conocenos
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Menu
          </a>
        </div>
      </main>
    </div>
  );
}
