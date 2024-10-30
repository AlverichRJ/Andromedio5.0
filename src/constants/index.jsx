import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { SiFacebook } from "react-icons/si";
import { BsCameraReels } from "react-icons/bs";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcSignature } from "react-icons/fc";

import image1 from "../assets/project1.jpg";
import image2 from "../assets/project2.jpg";
import image3 from "../assets/project3.jpg";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";


export const NAVIGATION_LINKS = [
  { label: "Conócenos", href: "#conocenos" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "", href: "#award" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contact" },
];

export const PROFILE = {
  name: "",
  info: "",
};

export const ABOUT = {
  text1:
    "🚀 Apasionados por el mkt y la publicidad. Transformamos ideas en estrategias ",
  text2:
    "En nuestra agencia de marketing y publicidad, llevamos la creatividad y la estrategia al siguiente nivel. Somos apasionados por conectar marcas con sus audiencias, entendiendo sus necesidades y superando sus expectativas. Transformamos ideas en estrategias innovadoras y efectivas que generan impacto y potencian el crecimiento de nuestros clientes. Con un enfoque integral, combinamos el análisis de mercado, la creatividad y las últimas tendencias digitales para ofrecer soluciones personalizadas y resultados medibles. Más que una agencia, somos el aliado que tu marca necesita para destacar en un mundo competitivo.",
};

export const PROJECTS = [
  {
    title: "E-commerce Platform",
    subtitle:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    image: image1,
  },
  {
    title: "Social Media App",
    subtitle:
      "A social media application developed using Next.js and Firebase.",
    image: image2,
  },
  {
    title: "Project Management Tool",
    subtitle: "A project management tool built with Django and PostgreSQL.",
    image: image3,
  },
  
];

export const SKILLS = [
  {
    icon: <SiFacebook className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "Gestión de Redes Sociales",
    experience: "2+ years",
  },
  {
    icon: <BsCameraReels className="text-4xl lg:text-6xl text-white" />,
    name: "Generación de Contenido",
    experience: "1+ year",
  },
  {
    icon: <FcPositiveDynamic className="text-4xl lg:text-6xl text-green-600" />,
    name: "Estrategia de Social Media",
    experience: "1.5+ years",
  },
  {
    icon: <FcCollaboration  className="text-4xl lg:text-6xl text-red-600" />,
    name: "Publicidad en Redes Sociales",
    experience: "1+ year",
  },
  {
    icon: <FcConferenceCall className="text-4xl lg:text-6xl text-green-600" />,
    name: "Creatividad Publicitaria",
    experience: "2+ years",
  },
  {
    icon: <FcSignature className="text-4xl lg:text-6xl text-sky-700" />,
    name: "Branding/Rebranding",
    experience: "1+ year",
  },
];

export const ACHIEVEMENT = {
  title: " ¿Qué podemos hacer?",
  award: "Crear tu identidad ",
  description:
    "Podemos crear la identidad de tu marca, hacer que tus potenciales clientes desarrollen un lazo con tu marca y así puedas tener clientes que siempre esten contigo.",
};

export const TESTIMONIALS = [
  {
    name: "Alverich Root Jordison",
    title: "Lead Developer, Digital Solutions",
    quote:
      "El trabajo de Alverich es de vital importancia ya que sus fundamentos y visiones en el mundo de la tecnologia logran posionar todas las plataformas en los mejores lugares .",
    image: user1,
  },
  {
    name: "Carlos Guerrero",
    title: "CTO, Creative Minds",
    quote:
      "Uno de los mejores diseñadores de México, pues sus inovadores ideas logran crear la perfeccion visual que estas buscando",
    image: user2,
  },
  {
    name: "Jorge Melendez",
    title: "CEO, Marketing",
    quote:
      "Nuestro CEO tiene una de las mejores visiones en el mundo del marketing pues sus ideas han ayudado a posicionar a las mejores marcas en posiciones de alto nivel.",
    image: user3,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61560385270437&mibextid=LQQJ4d",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  
  {
    href: "https://www.instagram.com/andromedia.mkt?igsh=Y3FzMHl5bWk5cDVy&utm_source=qr",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  
];
