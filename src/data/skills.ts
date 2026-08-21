/**
 * HABILIDADES TÉCNICAS Y HERRAMIENTAS.
 */

export type SkillGroup = {
  id: string;
  title: string;
  caption: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "planeacion-supply-chain",
    title: "Planeación & Supply Chain",
    caption: "S&OP, MRP y flujo de materiales",
    items: ["S&OP (Sales and Operations Planning)", "MRP y planeación de materiales", "Gestión de inventarios", "Abastecimiento", "Seguimiento de Lead Time", "Integración de demanda"],
  },
  {
    id: "operaciones-produccion",
    title: "Operaciones & Producción",
    caption: "Programación y control de planta",
    items: ["Planeación y programación de producción", "Balanceo y distribución de líneas", "Gestión de capacidad y recursos", "Coordinación multi-planta", "Logística interna y despachos", "Liderazgo de equipos de alto desempeño"],
  },
  {
    id: "gerencia-proyectos",
    title: "Gerencia de Proyectos & PMO",
    caption: "Cronogramas, riesgos y metodologías ágiles",
    items: ["Microsoft Project", "Gestión de cronogramas y alcance", "Gestión de riesgos y desviaciones", "Formulación y evaluación de proyectos", "Scrum / Agile", "Lean / Six Sigma"],
  },
  {
    id: "datos-herramientas",
    title: "Datos & Herramientas",
    caption: "Análisis, indicadores y sistemas de gestión",
    items: ["Excel avanzado (Power Pivot, Power Query, macros)", "Power BI (modelado y dashboards)", "Indicadores de gestión (KPIs)", "ERP", "PLM", "CRM"],
  },
];

/** Herramientas destacadas para una nube/lista rápida. */
export const toolbelt: string[] = [
  "Excel Avanzado",
  "Power BI",
  "Microsoft Project",
  "ERP",
  "PLM",
  "CRM",
  "S&OP",
  "MRP",
  "Scrum",
  "Lean",
  "Six Sigma",
];
