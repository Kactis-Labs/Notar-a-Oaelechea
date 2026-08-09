import imgEscrituras from '../assets/escrituras.jpg';
import imgTestamentosNuevo from '../assets/testamentos.png';
import imgVehiculos from '../assets/vehiculos.jpg';
import imgSucesion from '../assets/sucesion.jpg';
import imgLegalizacion from '../assets/legalizacion.jpg';
import imgEmpresas from '../assets/empresas.jpg';

export const servicesData = [
  {
    slug: 'fusiones-y-adquisiciones',
    title: 'Fusiones y Adquisiciones (M y A)',
    shortDesc: 'Asesoría estratégica en transacciones corporativas complejas, due diligence rigoroso y estructuración de negocios.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop',
    heroImg: imgEscrituras,
    tiempoEstimado: 'Atención Personalizada de Alto Nivel',
    teamMemberId: 'alejandro-paranti',
    detailedDesc: [
      'Asesoramos a corporaciones nacionales y multinacionales en el diseño, negociación y ejecución de operaciones de compraventa de empresas, reorganizaciones societarias, joint ventures y alianzas estratégicas.',
      'Nuestro enfoque combina el rigor analítico con una perspectiva de negocio integral, evaluando riesgos legales, regulatorios y fiscales para maximizar el valor comercial de cada transacción.',
      'Acompañamos desde la fase preliminar de auditoría de compra (due diligence) hasta la redacción y cierre de los contratos definitivos de adquisición y pactos de accionistas.'
    ],
    whoItAppliesTo: 'Empresas consolidadas, fondos de inversión y grupos corporativos en procesos de expansión, reestructuración o desinversión.',
    whatProblemItSolves: 'Mitiga contingencias financieras o contractuales ocultas, garantizando el cumplimiento normativo y blindando la transacción comercial.',
    requirements: [
      'Información financiera y societaria básica de las entidades involucradas.',
      'Acuerdos de confidencialidad (NDA) suscritos.',
      'Pactos preliminares o cartas de intención (LOI).'
    ]
  },
  {
    slug: 'gobierno-corporativo-y-empresa-familiar',
    title: 'Gobierno Corporativo y Empresa Familiar',
    shortDesc: 'Estructuración patrimonial, protocolos de familia y gobernanza para asegurar la continuidad intergeneracional.',
    img: imgTestamentosNuevo,
    heroImg: imgTestamentosNuevo,
    tiempoEstimado: 'Estrategia Continua',
    teamMemberId: 'valeria-paranti',
    detailedDesc: [
      'Diseñamos e implementamos arquitecturas de gobernanza diseñadas a la medida de cada familia empresaria y grupo corporativo, equilibrando la dinamica familiar con la eficiencia de negocio.',
      'Elaboramos protocolos de familia, convenios de accionistas y esquemas de sucesión ejecutiva que garantizan la permanencia del legado y previenen conflictos de control.',
      'Asesoramos a directorios y comités ejecutivos en buenas prácticas de gobierno corporativo, responsabilidad de directores y cumplimiento regulatorio.'
    ],
    whoItAppliesTo: 'Familias empresarias, holdings corporativos y directores de empresas con visión de trascendencia a largo plazo.',
    whatProblemItSolves: 'Evita disputas de control y bloqueos de gestión entre accionistas o familiares, asegurando una transición patrimonial ordenada y sostenible.',
    requirements: [
      'Organigrama societario y cuadro de participación accionaria.',
      'Entrevistas de diagnóstico con los miembros clave de la junta y la familia.',
      'Estatutos sociales vigentes.'
    ]
  },
  {
    slug: 'arbitraje-y-litigios-complejos',
    title: 'Arbitraje y Litigios Complejos',
    shortDesc: 'Representación técnica en controversias comerciales de alta relevancia ante tribunales arbitrales y judiciales.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop',
    heroImg: imgVehiculos,
    tiempoEstimado: 'Defensa de Alto Impacto',
    teamMemberId: 'valeria-paranti',
    detailedDesc: [
      'Contamos con amplia trayectoria en la prevención y resolución de disputas comerciales, civiles y contencioso-administrativas de elevada complejidad procesal o cuantía.',
      'Diseñamos estrategias probatorias sólidas para procesos arbitrales nacionales e internacionales bajo reglamentos institucionales de primer nivel (CCL, AmCham, CCI).',
      'Privilegiamos la negociación inteligente para alcanzar soluciones eficientes que preserven la reputación y los activos de nuestros clientes.'
    ],
    whoItAppliesTo: 'Compañías e inversionistas involucrados en discrepancias contractuales, conflictos societarios o reclamaciones complejas.',
    whatProblemItSolves: 'Protege los activos e intereses patrimoniales de la firma frente a reclamos adversos mediante una defensa jurídica incisiva y rigurosa.',
    requirements: [
      'Copia de los contratos y convenios arbitrales o cláusulas de litigio.',
      'Acopio documental de la controversia y antecedentes de comunicación.',
      'Evaluación técnica de contingencias.'
    ]
  },
  {
    slug: 'proteccion-patrimonial-y-private-wealth',
    title: 'Protección Patrimonial y Private Wealth',
    shortDesc: 'Planificación fiscal, estructuración de vehículos patrimoniales y custodia de activos para personas de alto patrimonio.',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop',
    heroImg: imgSucesion,
    tiempoEstimado: 'Estructuración Personalizada',
    teamMemberId: 'alejandro-paranti',
    detailedDesc: [
      'Brindamos asesoría discreta e individualizada a familias e individuos de alto patrimonio en la organización y preservación de su riqueza global.',
      'Estructuramos fideicomisos, fundaciones de interés privado, sociedades holding y vehículos de inversión en múltiples jurisdicciones con estricto apego al marco legal.',
      'Diseñamos esquemas de planificación sucesoria e inmobiliaria que minimizan riesgos fiscales y garantizan la protección de los beneficiarios.'
    ],
    whoItAppliesTo: 'Inversionistas, ejecutivos senior y grupos familiares que buscan consolidar y resguardar sus activos globales.',
    whatProblemItSolves: 'Mitiga la exposición innecesaria a riesgos legales o cargas impositivas ineficientes, otorgando absoluta tranquilidad patrimonial.',
    requirements: [
      'Inventario general de activos inmobiliarios y financieros.',
      'Identificación de objetivos sucesorios y beneficiarios.',
      'Análisis preliminar de residencia fiscal.'
    ]
  },
  {
    slug: 'contratacion-internacional-y-negocios',
    title: 'Contratación Internacional y Negocios',
    shortDesc: 'Negociación y diseño de instrumentos contractuales para operaciones cross-border y comercio global.',
    img: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=600&auto=format&fit=crop',
    heroImg: imgLegalizacion,
    tiempoEstimado: 'Cierre Estratégico',
    teamMemberId: 'alejandro-paranti',
    detailedDesc: [
      'Elaboramos y negociamos contratos comerciales internacionales (distribución, franquicias, licenciamiento de tecnología, financiamientos estructurados).',
      'Aseguramos la alineación de las transacciones con los estándares normativos aplicables en diferentes jurisdicciones y tratados de libre comercio.',
      'Proporcionamos acompañamiento continuo a empresas que expanden sus operaciones hacia mercados extranjeros o reciben inversión internacional.'
    ],
    whoItAppliesTo: 'Empresas en proceso de internacionalización, exportadores, importadores y socios de negocios transfronterizos.',
    whatProblemItSolves: 'Reduce el riesgo de vacíos normativos o vacíos de interpretación en contratos transfronterizos con contrapartes extranjeras.',
    requirements: [
      'Términos comerciales clave acordados (Term Sheet).',
      'Identificación de las normas y jurisdicciones involucradas.',
      'Documentación constitutiva de las partes contratantes.'
    ]
  },
  {
    slug: 'derecho-tributario-y-compliance',
    title: 'Derecho Tributario y Compliance',
    shortDesc: 'Estrategia fiscal preventiva, auditorías impositivas y programas de cumplimiento normativo empresarial.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop',
    heroImg: imgEmpresas,
    tiempoEstimado: 'Acompañamiento Permanente',
    teamMemberId: 'valeria-paranti',
    detailedDesc: [
      'Asesoramos a corporaciones en el diseño de planeamientos tributarios eficientes y en la gestión de fiscalizaciones de la administración tributaria (SUNAT).',
      'Desarrollamos e implementamos programas integrales de cumplimiento normativo (Compliance penal, libre competencia y prevención de lavado de activos).',
      'Realizamos diagnósticos de riesgo operacional para proteger a los administradores y directores de contingencias administrativas o penales.'
    ],
    whoItAppliesTo: 'Organizaciones que requieren mantener estándares elevados de integridad corporativa y eficiencia impositiva.',
    whatProblemItSolves: 'Previene sanciones administrativas, contingencias tributarias onerosas y daños reputacionales irreversibles.',
    requirements: [
      'Estructura operativa y estados de situación fiscal.',
      'Matriz de riesgos actual de la organización.',
      'Manuales o políticas corporativas vigentes.'
    ]
  }
];
