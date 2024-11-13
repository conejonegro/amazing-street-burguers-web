import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Utensils, Award, Sprout, ShieldCheck } from 'lucide-react'

export default function NosotrosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Nosotros</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="text-muted-foreground mb-4">
          Amazing Street Burgers nació de la pasión por crear las mejores hamburguesas de Guadalajara. Aunque somos nuevos en el mercado, nuestro compromiso con la calidad y el sabor nos motiva a convertirnos en el destino favorito de los amantes de las hamburguesas en esta ciudad.
          </p>
          <p className="text-muted-foreground">
            Acabamos de empezar este emocionante viaje, y estamos ansiosos por crecer junto a nuestra 
            comunidad, ofreciendo experiencias gastronómicas inolvidables en cada bocado.
          </p>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src="/asb-logo.png"
            alt="Equipo de Amazing Street Burguers"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-8">Nuestros Valores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { title: "Calidad Superior", icon: Utensils, description: "Utilizamos solo ingredientes de la más alta calidad en nuestras hamburguesas." },
          { title: "Higiene Impecable", icon: ShieldCheck, description: "Mantenemos los más altos estándares de higiene en toda nuestra operación." },
          { title: "Sabor Innovador", icon: Award, description: "Buscamos constantemente nuevas combinaciones de sabores para sorprender a nuestros clientes." },
          { title: "Compromiso Local", icon: Sprout, description: "Apoyamos a productores locales y contribuimos al crecimiento de nuestra comunidad." }
        ].map((value, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <value.icon className="w-6 h-6 mr-2 text-primary" />
                {value.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Nuestra Visión</h2>
        <p className="text-muted-foreground mb-4">
          En Amazing Street Burguers, aspiramos a convertirnos en el referente de hamburguesas 
          gourmet en Guadalajara. Nuestro objetivo es crecer junto a nuestra ciudad, ofreciendo 
          sabores únicos y experiencias memorables a cada cliente.
        </p>
        <Badge variant="secondary" className="text-lg py-1 px-3">
          ¡El futuro sabe delicioso!
        </Badge>
      </div>
    </div>
  )
}