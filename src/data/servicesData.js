import imgEscrituras from '../assets/escrituras.jpg';
import imgTestamentosNuevo from '../assets/testamentos.png';
import imgVehiculos from '../assets/vehiculos.jpg';
import imgSucesion from '../assets/sucesion.jpg';
import imgLegalizacion from '../assets/legalizacion.jpg';
import imgEmpresas from '../assets/empresas.jpg';

export const servicesData = [
  {
    slug: 'derecho-corporativo-empresarial',
    title: 'Derecho Corporativo y Empresarial',
    shortDesc: 'Consultoría estratégica en estructuración societaria, convenios de accionistas, fusiones y buen gobierno corporativo.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop',
    heroImg: imgEscrituras,
    tiempoEstimado: 'Atención Permanente y Personalizada',
    teamMemberId: 'roberto-medina',
    detailedDesc: [
      'Asesoramos a directorios y gerencias en el diseño legal de sus operaciones comerciales, estructuración estatutaria y reorganizaciones societarias de alto impacto.',
      'Elaboración y negociación de contratos mercantiles internacionales, pactos de socios y procesos de auditoría legal preventiva (Due Diligence).',
      'Protección de la responsabilidad legal de administradores y diseño de esquemas de gobernanza institucional sólidos.'
    ],
    whoItAppliesTo: 'Directores, accionistas e inversionistas que exigen solvencia en sus modelos de negocio e inversiones estratégicas.',
    whatProblemItSolves: 'Previene controversias entre socios, contingencias en transacciones comerciales y vacíos en la estructura corporativa.',
    requirements: [
      'Vigencia de poder de representantes legales.',
      'Estatutos sociales y contratos objeto de evaluación.',
      'Información básica sobre el grupo empresarial.'
    ]
  },
  {
    slug: 'compliance-gestion-riesgos',
    title: 'Compliance y Gestión de Riesgos',
    shortDesc: 'Diseño e implementación de modelos de prevención anticorrupción, lavado de activos y programas de integridad corporativa.',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
    heroImg: imgVehiculos,
    tiempoEstimado: 'Diseño e Implementación a Medida',
    teamMemberId: 'roberto-medina',
    detailedDesc: [
      'Estructuramos programas de Compliance conforme a la Ley N° 30424 e ISO 37001 para mitigar riesgos penales y administrativos en la actividad empresarial.',
      'Elaboración de códigos de ética, matrices de riesgos operacionales, canales de denuncia y capacitación especializada a ejecutivos.',
      'Supervisión y auditoría de cumplimiento en licitaciones y relaciones con entidades del sector público.'
    ],
    whoItAppliesTo: 'Empresas corporativas, entidades financieras y contratistas que buscan blindar su reputación y eximirse de responsabilidad administrativa.',
    whatProblemItSolves: 'Elimina contingencias penales corporativas, multas administrativas severas y daños reputacionales irreparables.',
    requirements: [
      'Organigrama y mapa de procesos corporativos.',
      'Entrevista diagnóstica con la alta gerencia.',
      'Políticas de control interno vigentes.'
    ]
  },
  {
    slug: 'derecho-civil-patrimonial',
    title: 'Derecho Civil y Patrimonial',
    shortDesc: 'Protección de grandes patrimonios, contratos civiles complejos, planificación sucesoria y saneamiento inmobiliario.',
    img: imgTestamentosNuevo,
    heroImg: imgTestamentosNuevo,
    tiempoEstimado: 'Consultoría Inmediata',
    teamMemberId: 'sofia-medina',
    detailedDesc: [
      'Diseñamos esquemas de planificación patrimonial familiar e inmobiliaria para proteger activos de alto valor frente a contingencias futuras.',
      'Saneamiento físico-legal de predios urbanos e industriales para su desarrollo comercial e inscripción transparente en la SUNARP.',
      'Patrocinio en controversias sobre propiedad, contratos civiles de envergadura e indemnizaciones por responsabilidad civil.'
    ],
    whoItAppliesTo: 'Familias empresarias, propietarios y desarrolladores inmobiliarios que requieren seguridad técnica en sus activos.',
    whatProblemItSolves: 'Resuelve vicios registrales, disputas hereditarias y protege la propiedad privada con plenas garantías jurídicas.',
    requirements: [
      'Documento de Identidad (DNI/CE) del cliente.',
      'Copia literal registral del bien inmueble.',
      'Documentación técnica o contractual pertinente.'
    ]
  },
  {
    slug: 'asesoria-tributaria-corporativa',
    title: 'Asesoría Tributaria Corporativa',
    shortDesc: 'Planeamiento fiscal responsable, consultoría en tributación nacional e internacional y defensa ante SUNAT.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop',
    heroImg: imgSucesion,
    tiempoEstimado: 'Auditoría Fiscal Continua',
    teamMemberId: 'sofia-medina',
    detailedDesc: [
      'Evaluación técnica de la carga tributaria en transacciones comerciales, fusiones y adquisiciones corporativas.',
      'Patrocinio en procedimientos de fiscalización tributaria, reclamaciones ante la SUNAT y apelaciones ante el Tribunal Fiscal.',
      'Diagnóstico preventivo de inconsistencias fiscales para evitar acotaciones y multas innecesarias.'
    ],
    whoItAppliesTo: 'Organizaciones y grupos económicos que buscan optimizar su carga tributaria respetando estrictamente el marco legal.',
    whatProblemItSolves: 'Evita contingencias fiscales millonarias, intereses moratorios y sanciones administrativas perjudiciales.',
    requirements: [
      'Ficha RUC y declaraciones juradas anuales.',
      'Notificaciones o requerimientos de fiscalización de SUNAT.',
      'Información contable y financiera del ejercicio.'
    ]
  },
  {
    slug: 'asesoria-legal-integral-litigios',
    title: 'Asesoría Legal Integral y Litigios',
    shortDesc: 'Consultoría externa 360°, defensa técnica en litigios complejas y patrocinio en arbitrajes comerciales.',
    img: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=600&auto=format&fit=crop',
    heroImg: imgLegalizacion,
    tiempoEstimado: 'Planes Retainer Anuales',
    teamMemberId: 'roberto-medina',
    detailedDesc: [
      'Servicio de iguala legal (Retainer) que brinda soporte cotidiano inmediato a la gerencia en todas sus dudas operativas y normativas.',
      'Patrocinio procesal riguroso en tribunales judiciales y juzgados comerciales, privilegiando la estrategia y el análisis cuantitativo de riesgos.',
      'Defensa técnica en arbitrajes institucionales y ad hoc de alta cuantía económica.'
    ],
    whoItAppliesTo: 'Compañías consolidadas que exigen un equipo jurídico multidisciplinario de cabecera con disponibilidad permanente.',
    whatProblemItSolves: 'Asegura respuestas rápidas y solventes frente a cualquier requerimiento o disputa del día a día del negocio.',
    requirements: [
      'Reunión diagnóstica con socios del bufete.',
      'Convenio de asesoría jurídica permanente.',
      'Acceso a antecedentes legales corporativos.'
    ]
  },
  {
    slug: 'contratacion-publica-arbitraje',
    title: 'Contratación Pública y Arbitraje',
    shortDesc: 'Asesoramiento estratégico en licitaciones con el Estado, solución de controversias contractuales y defensa arbitral.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop',
    heroImg: imgEmpresas,
    tiempoEstimado: 'Patrocinio Institucional',
    teamMemberId: 'sofia-medina',
    detailedDesc: [
      'Acompañamiento integral a proveedores e infraestructura en procesos de selección, APPs y obras por impuestos.',
      'Gestión de reclamos durante la ejecución contractual estatal (ampliaciones de plazo, valorizaciones y resoluciones).',
      'Defensa técnica en arbitrajes sobre contratación pública ante el OSCE y centros arbitrales líderes.'
    ],
    whoItAppliesTo: 'Empresas contratistas, consorcios y firmas proveedoras del sector público.',
    whatProblemItSolves: 'Protege las inversiones en licitaciones públicas e impide la imposición de penalidades o inhabilitaciones arbitrarias.',
    requirements: [
      'Bases del proceso o contrato público suscrito.',
      'Constancia del Registro Nacional de Proveedores (RNP).',
      'Documentación técnica e intercambios epistolares con la entidad.'
    ]
  }
];
