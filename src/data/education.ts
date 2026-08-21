/**
 * FORMACIÓN ACADÉMICA Y CURSOS COMPLEMENTARIOS.
 */

export type Education = {
  id: string;
  degree: string;
  institution: string;
  period: string;
};

export type Course = {
  title: string;
  institution: string;
  detail: string;
};

export const education: Education[] = [
  {
    id: "especializacion-gp",
    degree: "Especialización en Gerencia de Proyectos",
    institution: "Corporación Universitaria Minuto de Dios",
    period: "Finalizado, marzo 2026",
  },
  {
    id: "ingenieria-industrial",
    degree: "Ingeniería Industrial",
    institution: "Universidad Tecnológica de Pereira",
    period: "Finalizado, diciembre 2014",
  },
  {
    id: "tecnologo-industrial",
    degree: "Tecnólogo Industrial",
    institution: "Universidad Tecnológica de Pereira",
    period: "Finalizado, agosto 2002",
  },
];

export const courses: Course[] = [
  {
    title: "Formulación y evaluación de proyectos complejos",
    institution: "Universidad de los Andes",
    detail: "145 horas · abril 2026",
  },
  {
    title: "Scrum Master Certification: Scrum Methodologies",
    institution: "LearQuest",
    detail: "40 horas · abril 2026",
  },
  {
    title: "Supply Chain Analytics",
    institution: "Rutgers, The State University of New Jersey",
    detail: "77 horas · mayo 2025",
  },
  {
    title: "Gestión de proyectos con metodologías ágiles y enfoque Lean",
    institution: "Fundación Telefónica Movistar",
    detail: "mayo 2025",
  },
  {
    title: "Marketing digital y comercio electrónico",
    institution: "Google",
    detail: "120 horas · mayo 2025",
  },
  {
    title: "Administración y control de inventarios",
    institution: "SENA",
    detail: "junio 2018",
  },
  {
    title: "Procesamiento estadístico de datos de producción",
    institution: "SENA",
    detail: "julio 2016",
  },
];
