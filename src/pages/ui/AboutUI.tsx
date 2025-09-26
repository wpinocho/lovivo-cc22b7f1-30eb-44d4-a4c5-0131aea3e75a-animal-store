import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Calendar, 
  Package, 
  Phone, 
  Star, 
  UserCheck, 
  Users,
  MapPin,
  Mail,
  Clock
} from 'lucide-react';

/**
 * UI COMPONENT - AboutUI
 * 
 * Interfaz de usuario para la página Sobre Nosotros
 */

interface AboutUIProps {
  logic: {
    teamMembers: Array<{
      name: string;
      role: string;
      image: string;
      description: string;
    }>;
    stats: Array<{
      number: string;
      label: string;
      icon: string;
    }>;
    values: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
}

const iconMap = {
  calendar: Calendar,
  heart: Heart,
  package: Package,
  phone: Phone,
  star: Star,
  'user-check': UserCheck,
  users: Users
};

export const AboutUI = ({ logic }: AboutUIProps) => {
  console.log('AboutUI: Rendering about page');

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pet-green-light via-white to-pet-orange/20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Badge className="mb-6 bg-pet-green/10 text-pet-green border-pet-green/20">
            Nuestra Historia
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Más que una tienda,
            <span className="text-pet-green block">una familia que ama a los animales</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desde 2014, hemos dedicado nuestras vidas a brindar los mejores productos y servicios 
            para que tu mascota viva feliz y saludable. Cada producto que vendemos pasa por nuestro 
            riguroso proceso de selección.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {logic.stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <Card key={index} className="text-center border-pet-green/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-pet-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-pet-green" />
                  </div>
                  <div className="text-3xl font-bold text-pet-green mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Nuestra Misión
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Todo comenzó cuando María, nuestra fundadora y veterinaria, se dio cuenta de que 
                muchas familias tenían dificultades para encontrar productos de calidad para sus mascotas 
                a precios justos.
              </p>
              <p>
                Decidió crear PetShop Premium: un lugar donde cada producto es cuidadosamente seleccionado 
                por expertos, donde el asesoramiento es personalizado y donde el bienestar animal es 
                nuestra prioridad número uno.
              </p>
              <p>
                Hoy, después de más de 10 años, seguimos siendo una empresa familiar que pone el amor 
                por los animales por encima de todo.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop" 
              alt="Nuestra historia" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-pet-orange text-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span className="font-semibold">Con amor desde 2014</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-pet-green-light/30 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Nuestros Valores
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estos principios guían cada decisión que tomamos y cada producto que seleccionamos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {logic.values.map((value, index) => {
            const IconComponent = iconMap[value.icon as keyof typeof iconMap];
            return (
              <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="bg-pet-green w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Conoce a Nuestro Equipo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profesionales apasionados dedicados al bienestar de tu mascota
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {logic.teamMembers.map((member, index) => (
            <Card key={index} className="text-center border-pet-green/20 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-pet-green/20"
                />
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <Badge variant="secondary" className="mb-4 bg-pet-green/10 text-pet-green">
                  {member.role}
                </Badge>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-pet-green to-pet-green/80 text-white rounded-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="text-pet-green-light mb-8 max-w-2xl mx-auto">
            Nuestro equipo está aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>info@petshop.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Lun-Vie 9AM-6PM</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-pet-green hover:bg-pet-green-light"
          >
            Contáctanos Ahora
          </Button>
        </div>
      </section>
    </div>
  );
};