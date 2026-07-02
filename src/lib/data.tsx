import { Github, Linkedin } from "lucide-react";

import CulqiLogo from "../../public/images/culqi-logo.png";
import NexolinkLogo from "../../public/images/nexolink-logo.png";
import MacsaLogo from "../../public/images/macsa-logo.png";
import FortelLogo from "../../public/images/fortel-logo.png";

import AmericaSolidaria from "../../public/images/america_solidaria_web.png";
import Aspefobst from "../../public/images/aspefobst_web.png";
import ConCausa from "../../public/images/concausa_web.png";
import CheapTrip from "../../public/images/agency_cheaptrip_web.png";
import Asesoria from "../../public/images/asesoria_tesis_web.png";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/giorgioprm",
  GITHUB_REPO: "https://github.com/giorgioprm",
  TWITTER: "",
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
    icon: Linkedin,
    url: "https://www.linkedin.com/in/gpaoloruitonm",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: CulqiLogo,
    logoAlt: "Culqi logo",
    position: "QA Analyst / Technical Support Analyst",
    startDate: new Date(2024, 2),
    endDate: new Date(2025, 2),
    // currentlyWorkHere: true,
    summary: [
      "Gestioné y analicé datos complejos en MySQL y MongoDB, optimizando consultas para mejorar la eficiencia operativa.",
      "Realicé integraciones y pruebas exhaustivas de APIs REST utilizando Postman, asegurando la conectividad y funcionalidad de los servicios.",
      "Administré usuarios y permisos en AWS Cognito y Microsoft IAM, fortaleciendo la seguridad y el control de acceso.",
      "Monitoreé y resolví proactivamente incidencias en entornos Kubernetes, manteniendo la estabilidad y disponibilidad de las aplicaciones.",
      "Proporcioné soporte técnico especializado para plataformas de pago (Culqi Link, POS, Online) y medios de pago (Niubiz, OT, TQC), garantizando la continuidad del negocio.",
      "Configuré terminales MPOS (asignación, liberación, reactivación), optimizando la gestión de dispositivos.",
      "Resolví tickets de soporte a través de Zendesk, Zoho Desk y sistemas internos (TicketTrac), mejorando la satisfacción del cliente.",
      "Administré servidores GNU/Linux e implementé prácticas DevOps (CI/CD, monitoreo, optimización de infraestructura), incrementando la eficiencia del desarrollo.",
    ],
  },
  {
    logo: NexolinkLogo,
    logoAlt: "Nexolink logo",
    position: "Software Developer | QA Projects",
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
    technologies: ["Wordpress", "PHP", "MySQL"],
  },
  {
    name: "Agencia de Viajes - CheapTrip",
    description:
      "Creación de web page para Examen Final del Curso Proyecto Integrador I - Prueba De Software.",
    url: "https://giorgioprm.github.io/Agencia-CheapTrip/",
    github: "https://github.com/giorgioprm/Agencia-CheapTrip",
    previewImage: CheapTrip,
    technologies: ["HTML", "CSS", "JavaScript"],
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
