import { Github, Twitter, Figma, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import NexolinkLogo from "/public/images/nexolink-logo.png";
import MacsaLogo from "/public/images/macsa-logo.png";
import FortelLogo from "/public/images/fortel-logo.png";

import AmericaSolidaria from "/public/images/america_solidaria_web.png";
import Aspefobst from "/public/images/aspefobst_web.png";
import ConCausa from "/public/images/concausa_web.png";
import CheapTrip from "/public/images/agency_cheaptrip_web.png";
import RickandMorty from "/public/images/rick&morty_web.png";
import Asesoria from "/public/images/asesoria_tesis_web.png";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/giorgioprm",
  GITHUB_REPO: "https://github.com/giorgioprm",
  TWITTER: "https://twitter.com/giorgioprm_",
  FIGMA: "",
  FIGMA_FILE: "",
};

export const NAV_LINKS = [
  {
    label: "Inicio",
    href: "#inicio",
  },
  {
    label: "Experiencia",
    href: "#experiences",
  },
  {
    label: "Proyectos",
    href: "#work",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/giorgioprm",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/giorgioprm_",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/gpaoloruitonm",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: NexolinkLogo,
    logoAlt: "Nexolink logo",
    position: "Software Developer",
    startDate: new Date(2022, 1),
    endDate: new Date(2023, 6),
    // currentlyWorkHere: true,
    summary: [
      "Trabajo en remoto, parte del equipo de desarrollo de un software de pagos FX utilizado por varias empresas de todo el mundo como First Rate FX, Moneytech, IPG, Payment earth o unimoni (anteriormente UAEexchange).",
      "Development of REST APIs: (C# / .NET) (NodeJS), Web Applications (.NET)(React), of mobile applications (Android native / iOS native / React Native)based on the main software, of control applications for TFS (C# / .NET), ofcustomized reports for clients (C# / .NET).",
      "Mantenimiento del software de escritorio (C# / .NET)",
      "Migración de bases de datos a distintos sistemas (SQL & MySQL)",
      "Mantenimiento de SQLServer & MySQL Store Procedures",
    ],
  },
  {
    logo: MacsaLogo,
    darkModeLogo: MacsaLogo,
    logoAlt: "Maacsa logo",
    position: "Soporte Técnico Nivel 1 – 2",
    startDate: new Date(2017, 6),
    endDate: new Date(2018, 3),
    summary: [
      "Instalación, diagnostico, configuración y mantenimiento de equipos de cómputo, comunicación y otros dispositivos tecnológicos",
      "Coordinar con proveedores de hardware y software",
      "Operar el sistema de Mesa de Ayuda",
      "Configuración de cuentas de Correo electrónico así como su administración",
    ],
  },
  {
    logo: FortelLogo,
    darkModeLogo: FortelLogo,
    logoAlt: "Fortel logo",
    position: "Soporte de Tecnología de la Información",
    startDate: new Date(2015, 11),
    endDate: new Date(2017, 4),
    summary: [
      "Mantenimiento del hardware y software, asi como diagnóstico yConfiguración de pcs",
      "Cableado y Estructurado de Redes",
      "Revisión de equipos adquiridos o por garantía",
      "Solución de incidencias técnicas. Mantener Inventarios de equipos de cómputo",
      "Cumplimiento con el programa de mantenimiento preventivo y correctivo",
      "Instalación de Portátiles, pcs, impresoras, software y de redes (LAN Y WAN)",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Aspefobst",
    description:
      "Creación de Landing page, asi como la edición de imágenes para la web de la Asociacion Peruana de Obstetras.",
    url: "https://www.aspefobst.pe/",
    github: "#",
    previewImage: Aspefobst,
    technologies: ["Wordpress", "PHP", "MySQL"],
  },
  {
    name: "AmericaSolidaria",
    description:
      "Creación de Landing page, asi como la edición de imágenes para la web AmericaSolidaria Chile.",
    url: "https://americasolidaria.org/",
    github: "#",
    previewImage: AmericaSolidaria,
    technologies: ["Wordpress", "PHP", "MySQL"],
  },
  {
    name: "ConCausa",
    description:
      "Creación de Landing page, asi como la edición de imágenes para la web ConCausa, proyecto de AmericaSolidaria Chile.",
    url: "https://www.concausa2030.com/",
    github: "#",
    previewImage: ConCausa,
    technologies: [
      "Wordpress", "PHP", "MySQL",
    ],
  },
  {
    name: "Agencia de Viajes - CheapTrip",
    description:
      "Creación de web page para Examen Final del Curso Proyecto Integrador I - Prueba De Software.",
    url: "https://giorgioprm.github.io/Agencia-CheapTrip/",
    github: "https://github.com/giorgioprm/Agencia-CheapTrip",
    previewImage: CheapTrip,
    technologies: [
      "HTML", "CSS", "JavaScript",
    ],
  },
  {
    name: "Rick and Morty App",
    description:
      "Web page con imagenes y datos del Api gratuita de Rick and Morty.",
    url: "https://giorgioprm.github.io/Rick-and-Morty-app/",
    github: "https://github.com/giorgioprm/Rick-and-Morty-app",
    previewImage: RickandMorty,
    technologies: [
      "React", "JavaScript", "HTML", "CSS",
    ],
  },
  {
    name: "Asesoría de Tesis",
    description:
      "Creación de web page para brindar el servicio de Asesoría de Tesis, con reserva y agendado de citas.",
    url: "https://giorgioprm.github.io/Agencia-CheapTrip/",
    github: "",
    previewImage: Asesoria,
    technologies: [
      "Wordpress", "PHP", "MySQL",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "",
    personAvatar: "",
    title: "",
    testimonial: "",
  },
  {
    personName: "",
    personAvatar: "",
    title: "",
    testimonial: "",
  },
  {
    personName: "",
    personAvatar: "",
    title: "",
    testimonial: "",
  },
];
