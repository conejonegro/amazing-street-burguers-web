import styles from "@/app/css/footer/footer.module.css"
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Amazing Street Burguers inc
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        True Love Design Studio
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Cineclub Forever →
      </a>
    </footer>
  );
}
