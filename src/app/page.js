import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MenuIcon, MapPinIcon, ClockIcon } from "lucide-react";

const burguers = [
  {
    nombre: "Clasica",
    descripcion:
      "Deliciosa hamburguesa clásica hecha con ingredientes frescos y de alta calidad.",
    precio: "120",
    imageURL: "/classic-smash-picles.png",
  },
  {
    nombre: "Amazing Guacamole bacon",
    descripcion:
      "Deliciosa hamburguesa especial del chef hecha con ingredientes frescos y de alta calidad.",
    precio: "140",
    imageURL: "/guacamole-bacon.png",
  },
  {
    nombre: "Amazing Onion Smash",
    descripcion:
      "Una hamburguesa smash con carne dorada y crujiente en los bordes, cubierta de queso amarillo derretido y cebolla caramelizada. Se sirve en un pan suave y tostado, resaltando la jugosidad y sabor de cada capa.",
    precio: "140",
    imageURL: "/onion-smashed.png",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative h-[60vh]">
          <Image
            src={"/hero-banner.png"}
            alt="Deliciosa hamburguesa de Amazing Street Burguers"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Amazing Street Burguers
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Las mejores hamburguesas de Guadalajara
              </p>
              <Button asChild size="lg">
                <Link href="/menu">Ver Menú</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nuestras Especialidades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {burguers.map((burger, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <Image
                      src={burger.imageURL}
                      alt={`Hamburguesa`}
                      width={300}
                      height={200}
                      className="rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      Hamburguesa {burger.nombre}
                    </h3>
                    <p className="text-muted-foreground">
                      Deliciosa hamburguesa {burger.nombre.toLowerCase()} hecha
                      con ingredientes frescos y de alta calidad.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <MenuIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Menú Variado</h3>
                <p className="text-muted-foreground">
                  Ofrecemos una amplia variedad de hamburguesas para todos los
                  gustos.
                </p>
              </div>
              <div className="text-center">
                <MapPinIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Ubicación Céntrica
                </h3>
                <p className="text-muted-foreground">
                  Nos encontramos en el corazón de Guadalajara, fácil de llegar
                  desde cualquier punto.
                </p>
              </div>
              <div className="text-center">
                <ClockIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Servicio Rápido</h3>
                <p className="text-muted-foreground">
                  Preparamos tus hamburguesas en tiempo récord sin sacrificar la
                  calidad.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Amazing Street Burguers. Todos los
            derechos reservados.
          </p>
          <p className="mt-2">Hecho con amor por True Love Design</p>
        </div>
      </footer>
    </div>
  );
}
