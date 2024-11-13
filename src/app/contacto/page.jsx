import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function UbicacionContacto() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Ubicación y Contacto</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Nuestra Ubicación</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Image
                src="/mapa.png"
                alt="Mapa de ubicación de Amazing Street Burguers"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                Lerdo de Tejada 2407, Colonia Arcos Vallarta
              </p>
              <p className="pl-7">Guadalajara, Jalisco, México</p>
              <p className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                +52 (33) 1234-5678
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                info@amazingstreetburguers.com
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contáctanos</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <Input id="nombre" placeholder="Tu nombre" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <Input id="email" type="email" placeholder="tu@email.com" required />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí" rows={4} required />
              </div>
              <Button type="submit" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}