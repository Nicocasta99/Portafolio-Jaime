/**
 * SERVICIOS — Consultoría en operaciones, planeación y gerencia de proyectos.
 */

export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  cta: string;
};

export const services: Service[] = [
  {
    id: "diagnostico-mejora",
    index: "01",
    title: "Diagnóstico y mejora de procesos productivos",
    description:
      "Diagnóstico de operaciones y procesos productivos para identificar restricciones, desperdicios y oportunidades de mejora en productividad y eficiencia.",
    benefits: [
      "Identificación clara de restricciones operativas",
      "Plan de acción priorizado por impacto",
      "Indicadores de seguimiento definidos",
    ],
    deliverables: ["Diagnóstico operativo (DOFA)", "Plan de mejora con indicadores", "Informe de hallazgos"],
    cta: "Diagnostiquemos tu operación",
  },
  {
    id: "planeacion-control-produccion",
    index: "02",
    title: "Planeación y control de producción",
    description:
      "Diseño y puesta en marcha de esquemas de planeación, programación y control de producción, con indicadores de cumplimiento y productividad.",
    benefits: [
      "Programación de producción más confiable",
      "Mejor uso de maquinaria, personal y recursos",
      "Menos desviaciones frente al plan",
    ],
    deliverables: ["Esquema de planeación y programación", "Tablero de indicadores (Excel / Power BI)", "Plan de balanceo de líneas"],
    cta: "Ordenemos tu producción",
  },
  {
    id: "sop-abastecimiento",
    index: "03",
    title: "S&OP y gestión de abastecimiento",
    description:
      "Articulación de producción y abastecimiento mediante procesos de S&OP y MRP, con seguimiento de Lead Time y disponibilidad de materiales.",
    benefits: [
      "Menos quiebres de material y paradas de línea",
      "Mejor sincronización entre demanda, producción y compras",
      "Mayor trazabilidad del flujo de materiales",
    ],
    deliverables: ["Proceso S&OP documentado", "Modelo MRP básico", "Seguimiento de Lead Time"],
    cta: "Sincronicemos tu cadena",
  },
  {
    id: "gerencia-proyectos-pmo",
    index: "04",
    title: "Gerencia y dirección de proyectos (PMO)",
    description:
      "Dirección de proyectos e iniciativas de mejora: cronogramas, alcance, riesgos, indicadores y equipos multidisciplinarios, con metodologías ágiles y Lean.",
    benefits: [
      "Cronogramas y entregables bajo control",
      "Riesgos identificados a tiempo",
      "Equipos alineados a un mismo plan",
    ],
    deliverables: ["Cronograma y plan de proyecto", "Matriz de riesgos", "Reportes de avance ejecutivos"],
    cta: "Dirijamos tu proyecto",
  },
];
