/**
 * EXPERIENCIA PROFESIONAL — consolidada a partir de las tres hojas de vida
 * (Producción, Planeación/Supply Chain, Gerencia de Proyectos). Cada cargo
 * fusiona los logros de las tres versiones en un solo set no redundante.
 */

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  achievements: string[];
  tools: string[];
};

export const experiences: Experience[] = [
  {
    id: "zasca",
    role: "Profesional de mejoramiento de producto y consultor de productividad y administración",
    company: "ZASCA Manufactura",
    period: "Julio 2025 — Actualidad",
    current: true,
    summary:
      "Consultoría a MiPymes en buenas prácticas de manufactura, planeación de producción y mejora continua, con seguimiento vía cronogramas e indicadores de gestión.",
    achievements: [
      "Acompaño a MiPymes en buenas prácticas de manufactura, gestión operativa, planeación de producción y control de costos.",
      "Coordino y hago seguimiento a equipos técnicos multidisciplinarios, garantizando el cumplimiento de cronogramas, metas y actividades programadas.",
      "Diseño, implemento y hago seguimiento a indicadores de gestión para evaluar el desempeño de las intervenciones en empresas beneficiarias.",
      "Diagnostico procesos productivos (incluye análisis DOFA) para identificar oportunidades de mejora en productividad, eficiencia y utilización de recursos.",
      "Elaboro y actualizo planes operativos, cronogramas de trabajo y herramientas de control para la gestión eficiente de los servicios del centro.",
      "Construyo informes técnicos, reportes de avance y documentos de seguimiento para la toma de decisiones.",
    ],
    tools: ["Diagnóstico empresarial", "Indicadores de gestión", "Mejora continua", "Cronogramas"],
  },
  {
    id: "coytex-uen",
    role: "Director de Unidad Estratégica de Negocio (UEN)",
    company: "COYTEX S.A.S",
    period: "Agosto 2024 — Octubre 2024",
    summary:
      "Dirección integral de la operación productiva de la UEN, articulando producción y abastecimiento mediante S&OP.",
    achievements: [
      "Lideré la planeación, ejecución, dirección y control integral de las actividades e iniciativas estratégicas de la UEN.",
      "Articulé las necesidades de producción, abastecimiento y operación mediante el proceso S&OP.",
      "Analicé las necesidades operativas frente a las capacidades disponibles y diseñé planes de acción para cerrar brechas.",
      "Realicé seguimiento a Lead Time, tiempos de proceso y cumplimiento de las actividades críticas de la operación.",
      "Definí y di seguimiento a indicadores de desempeño operacional de la unidad.",
      "Coordiné la articulación entre producción, abastecimiento y demás áreas involucradas en las iniciativas.",
    ],
    tools: ["S&OP", "Lead Time", "Gestión de capacidad", "Indicadores"],
  },
  {
    id: "coytex-abastecimiento",
    role: "Director de Abastecimiento",
    company: "COYTEX S.A.S",
    period: "Agosto 2021 — Agosto 2024",
    summary:
      "Garantía del flujo de abastecimiento de materias primas e insumos, articulado con producción mediante S&OP.",
    achievements: [
      "Garanticé el flujo eficiente de la cadena de suministro y de las actividades de producción y preproducción.",
      "Gestioné materias primas, insumos, patronaje, desarrollo de muestras y validación de tiempos según las necesidades del S&OP.",
      "Articulé abastecimiento y producción mediante las necesidades definidas en el proceso S&OP.",
      "Realicé seguimiento a Lead Time y a la disponibilidad oportuna de materiales frente a los requerimientos de producción.",
      "Identifiqué restricciones de materiales y lideré iniciativas de mejora para reducir su impacto sobre la operación.",
      "Hice seguimiento a indicadores de cumplimiento y oportunidad del abastecimiento.",
    ],
    tools: ["Abastecimiento", "S&OP", "Gestión de proveedores", "Lead Time"],
  },
  {
    id: "crystal",
    role: "Coordinador de Planeación de Producción",
    company: "CRYSTAL S.A.S",
    period: "Mayo 2015 — Agosto 2021",
    summary:
      "Planeación y programación de producción de cuatro plantas (Pereira, Manizales, Sabaneta y Marinilla).",
    achievements: [
      "Coordiné la programación y ejecución de la planeación de producción de las plantas de Pereira, Manizales, Sabaneta y Marinilla.",
      "Establecí metas de producción y determiné necesidades de maquinaria, personal y recursos para cumplir los presupuestos.",
      "Elaboré y controlé planes de producción, realizando seguimiento a su cumplimiento y a las metas establecidas.",
      "Analicé desviaciones entre producción programada y ejecutada, y establecí acciones de recuperación.",
      "Coordiné con las áreas productivas la ejecución de los planes y el cumplimiento de fechas de entrega.",
      "Generé indicadores y reportes de productividad y cumplimiento para apoyar la toma de decisiones.",
    ],
    tools: ["Planeación de producción", "Multi-planta", "Indicadores", "Gestión de recursos"],
  },
  {
    id: "nicole-jefe",
    role: "Jefe de Producción — Producto Terminado",
    company: "NICOLE S.A.S",
    period: "Enero 2008 — Mayo 2015",
    summary:
      "Dirección de un equipo de 500 colaboradores en tres turnos, liderando lavandería, plancha, terminación, empaque y despachos.",
    achievements: [
      "Lideré integralmente las operaciones de producto terminado en las áreas de lavandería, plancha, terminación, empaque y despachos.",
      "Dirigí un equipo de trabajo de 500 colaboradores distribuidos en tres turnos de producción.",
      "Planifiqué, programé y controlé la ejecución de las actividades productivas y la asignación de personal.",
      "Administré recursos humanos, técnicos y operativos para garantizar el cumplimiento de los programas.",
      "Analicé indicadores de productividad, eficiencia y cumplimiento, identificando desviaciones y acciones correctivas.",
      "Coordiné la continuidad y el flujo de producción entre las diferentes áreas y el cumplimiento de entregas y despachos.",
    ],
    tools: ["Liderazgo de equipos", "Producción multi-turno", "Indicadores", "Gestión operativa"],
  },
  {
    id: "nicole-asistente",
    role: "Asistente de Producción / Analista de Ingeniería y Cotizaciones",
    company: "NICOLE S.A.S",
    period: "Agosto 2002 — Enero 2008",
    summary:
      "Balanceo de líneas, logística interna y desarrollo de indicadores de gestión para producción.",
    achievements: [
      "Apoyé el balanceo y la distribución de líneas de producción.",
      "Gestioné la logística interna de recursos, materias primas e insumos para el cargue a módulos de producción.",
      "Desarrollé e implementé indicadores de gestión para apoyar la toma de decisiones y evaluar el desempeño operativo.",
      "Hice seguimiento a entregas completas y oportunas al CEDI.",
      "Participé en actividades de ingeniería y análisis de información orientadas a optimizar la operación.",
      "Elaboré información técnica relacionada con procesos y cotizaciones.",
    ],
    tools: ["Balanceo de líneas", "Logística interna", "Indicadores", "Ingeniería de procesos"],
  },
];
