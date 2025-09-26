import { ReactNode } from 'react';

/**
 * HEADLESS COMPONENT - HeadlessAbout
 * 
 * Lógica de negocio para la página Sobre Nosotros
 */

interface AboutLogic {
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
}

interface HeadlessAboutProps {
  children: (logic: AboutLogic) => ReactNode;
}

export const HeadlessAbout = ({ children }: HeadlessAboutProps) => {
  console.log('HeadlessAbout: Initializing about page logic');

  const teamMembers = [
    {
      name: "María González",
      role: "Fundadora & Veterinaria",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      description: "Con más de 15 años de experiencia en veterinaria, María fundó PetShop Premium con la misión de brindar los mejores productos para nuestras mascotas."
    },
    {
      name: "Carlos Rodríguez",
      role: "Especialista en Nutrición",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      description: "Experto en nutrición animal, Carlos se encarga de seleccionar los mejores alimentos y suplementos para cada tipo de mascota."
    },
    {
      name: "Ana Martínez",
      role: "Gerente de Atención al Cliente",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Ana lidera nuestro equipo de atención al cliente, asegurándose de que cada familia encuentre exactamente lo que necesita para su mascota."
    }
  ];

  const stats = [
    {
      number: "10+",
      label: "Años de experiencia",
      icon: "calendar"
    },
    {
      number: "5000+",
      label: "Familias felices",
      icon: "heart"
    },
    {
      number: "500+",
      label: "Productos premium",
      icon: "package"
    },
    {
      number: "24/7",
      label: "Soporte disponible",
      icon: "phone"
    }
  ];

  const values = [
    {
      title: "Calidad Premium",
      description: "Seleccionamos cuidadosamente cada producto para garantizar la mejor calidad para tu mascota.",
      icon: "star"
    },
    {
      title: "Asesoría Experta",
      description: "Nuestro equipo de veterinarios y especialistas está siempre disponible para ayudarte.",
      icon: "user-check"
    },
    {
      title: "Amor por los Animales",
      description: "Cada decisión que tomamos está guiada por nuestro profundo amor y respeto hacia los animales.",
      icon: "heart"
    },
    {
      title: "Compromiso Social",
      description: "Apoyamos refugios locales y programas de adopción responsable en nuestra comunidad.",
      icon: "users"
    }
  ];

  const logic: AboutLogic = {
    teamMembers,
    stats,
    values
  };

  console.log('HeadlessAbout: Logic prepared', logic);

  return <>{children(logic)}</>;
};