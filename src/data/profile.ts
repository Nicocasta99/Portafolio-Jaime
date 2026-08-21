/**
 * PERFIL — Jaime Andrés Castaño Gómez.
 * Consolida las tres hojas de vida (Producción, Planeación/Supply Chain,
 * Gerencia de Proyectos) en un solo perfil profesional.
 */

export type ProfileLink = {
  label: string;
  href: string;
  handle: string;
};

export const profile = {
  owner: "Jaime Andrés Castaño",
  fullName: "Jaime Andrés Castaño Gómez",

  role: "Gerencia de Proyectos",
  roles: [
    "Gerencia de Proyectos",
    "Operaciones & Producción",
    "Planeación & Supply Chain",
    "Mejora Continua",
  ],
  tagline: "Ingeniero Industrial · Especialista en Gerencia de Proyectos",

  location: "Colombia",
  availability: "Disponibilidad para trabajo presencial y reubicación según requerimiento del cargo.",
  email: "jacastago@gmail.com",
  phone: "321 528 7995",

  summaryShort:
    "Ingeniero Industrial especialista en Gerencia de Proyectos, con más de 20 años liderando producción, planeación, Supply Chain y mejora continua en entornos de manufactura.",

  summaryLong:
    "Ingeniero Industrial, especialista en Gerencia de Proyectos, con una trayectoria de más de 20 años en manufactura que combina tres frentes complementarios: dirección de operaciones y producción, planeación y Supply Chain (S&OP, MRP), y gerencia de proyectos y mejora continua. He liderado la programación y ejecución de operaciones productivas, la gestión de capacidades y recursos, y el cumplimiento de metas e indicadores en plantas de hasta 500 colaboradores en tres turnos. En paralelo, he articulado producción con abastecimiento mediante procesos de S&OP y MRP, y dirigido iniciativas y equipos técnicos con enfoque en cronogramas, riesgos, indicadores y metodologías ágiles (Lean, Scrum). Manejo avanzado de Excel y Power BI, con experiencia práctica en ERP, PLM, MRP, S&OP y Microsoft Project aplicados al análisis, seguimiento y toma de decisiones operativas.",

  stack: ["Power BI", "Excel Avanzado", "Microsoft Project", "S&OP"],

  competencies: [
    "Planeación, programación y control de producción",
    "Supply Chain y S&OP (Sales and Operations Planning)",
    "MRP y planeación de materiales",
    "Gerencia, coordinación y seguimiento de proyectos (PMO)",
    "Gestión de capacidad, maquinaria, personal y recursos",
    "Balanceo y distribución de líneas",
    "Indicadores de gestión y cumplimiento",
    "Gestión de riesgos y desviaciones",
    "Mejora continua y optimización de procesos",
    "Metodologías ágiles, Lean y Scrum",
    "Gestión de equipos de alto desempeño",
    "Logística interna, despachos y cumplimiento de entregas",
  ],

  tools: [
    "Excel avanzado (tablas dinámicas, macros, Power Pivot, Power Query)",
    "Power BI (modelado, visualizaciones, tableros de control)",
    "Microsoft Project",
    "ERP",
    "PLM",
    "CRM",
    "S&OP",
    "MRP",
    "Agile / Scrum",
    "Lean / Six Sigma",
  ],

  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jaime-andres-castano-gomez-6b4719143",
      handle: "/in/jaime-andres-castaño-gomez",
    },
    {
      label: "Email",
      href: "mailto:jacastago@gmail.com",
      handle: "jacastago@gmail.com",
    },
    {
      label: "Teléfono",
      href: "tel:+573215287995",
      handle: "321 528 7995",
    },
  ] satisfies ProfileLink[],

  // Ruta al CV en PDF. Coloca el archivo consolidado en /public/documents/.
  cvPath: "/documents/CV-Jaime-Andres-Castano.pdf",
};

export type Profile = typeof profile;
