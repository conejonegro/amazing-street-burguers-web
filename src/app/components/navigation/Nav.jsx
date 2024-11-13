import Link from "next/link";
import styles from "@/app/css/navigation/nav.module.css";

export default function Nav() {
  return (
    <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Amazing Street Burguers</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/menu" className="hover:underline">Menú</Link></li>
              <li><Link href="/nosotros" className="hover:underline">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>
  );
}
