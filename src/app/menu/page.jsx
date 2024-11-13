import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import Image from "next/image";



const menuItems = [
  {
    name: "Clásica Amazing",
    description: "Carne de res, queso cheddar, lechuga, tomate y nuestra salsa especial",
    price: 85,
    category: "Hamburguesa"
  },
  {
    name: "Picante Deluxe",
    description: "Carne de res, queso pepper jack, jalapeños, cebolla caramelizada y salsa habanero",
    price: 95,
    category: "Hamburguesa",
    isSpicy: true
  },
  {
    name: "Veggie Supreme",
    description: "Hamburguesa de lentejas y champiñones, queso vegano, aguacate y espinacas",
    price: 90,
    category: "Hamburguesa",
    isVegetarian: true
  },
  {
    name: "Refresco de Cola",
    description: "Bebida refrescante carbonatada",
    price: 25,
    category: "Refresco"
  },
  {
    name: "Limonada Casera",
    description: "Limonada fresca hecha en casa",
    price: 30,
    category: "Refresco"
  },
  {
    name: "Papas Fritas Clásicas",
    description: "Crujientes papas fritas con sal",
    price: 35,
    category: "Papas"
  },
  {
    name: "Papas Gajo Especiadas",
    description: "Papas en gajo con una mezcla de especias",
    price: 40,
    category: "Papas"
  }
]

export default function Menu() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Menú de Amazing Street Burguers</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <Card key={index}>
             <Image
               src="/guacamole-bacon.png"
               width={80}
               height={80}
               alt="burguers"
               className="block"
            />
            
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{item.name}</span>
                <Badge variant="secondary">${item.price}</Badge>
              </CardTitle>
              
            </CardHeader>
            <CardContent>
           
              <p className="text-muted-foreground mb-2">{item.description}</p>
              <div className="flex space-x-2">
                <Badge>{item.category}</Badge>
                {item.isSpicy && <Badge variant="destructive">Picante</Badge>}
                {item.isVegetarian && <Badge variant="outline" className="border-green-500 text-green-500">Vegetariano</Badge>}
              </div>
            </CardContent>
            
          </Card>
        ))}
      </div>
    </div>
  )
}