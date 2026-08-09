import imgEmpresas from '../assets/empresas.jpg';
import imgEscrituras from '../assets/escrituras.jpg';
import imgLegalizacion from '../assets/legalizacion.jpg';
import imgVehiculos from '../assets/vehiculos.jpg';
import imgTestamentosNuevo from '../assets/testamentos.png';
import imgSucesion from '../assets/sucesion.jpg';

export const servicesData = [
  {
    slug: 'asesoria-legal-empresarial',
    title: 'Asesoría Legal Empresarial',
    shortDesc: 'Consultoría integral para empresas, estructuración de contratos societarios y gobierno corporativo.',
    img: imgEmpresas,
    heroImg: imgEmpresas,
    tiempoEstimado: 'Atención corporativa continua',
    teamMemberId: 'roberto-bobadilla',
    detailedDesc: [
      'Asesoramiento permanente en operaciones comerciales, junta de socios y reorganizaciones de empresas.',
      'Elaboración de convenios de accionistas, blindaje estatutario y auditorías preventivas.',
      'Representación ante entidades públicas y supervisión de licencias corporativas.'
    ],
    whoItAppliesTo: 'Empresas, sociedades comerciales y emprendimientos corporativos en Trujillo y la región.',
    whatProblemItSolves: 'Previene contingencias legales y otorga seguridad jurídica continua a la gestión comercial.',
    requirements: [
      'Estatuto de la empresa y vigencia de poder.',
      'Ficha RUC de la compañía.'
    ]
  },
  {
    slug: 'litigios-defensa-judicial',
    title: 'Litigios y Defensa Judicial',
    shortDesc: 'Patrocinio frontal en procesos civiles, comerciales, contenciosos e instancias arbitrales.',
    img: imgEscrituras,
    heroImg: imgEscrituras,
    tiempoEstimado: 'Evaluación de expediente en 24h',
    teamMemberId: 'roberto-bobadilla',
    detailedDesc: [
      'Diseño e implementación de estrategias probatorias minuciosas para juicios civiles y comerciales.',
      'Representación en procesos ejecutivos, cobro de deudas, desalojos e indemnizaciones.'
    ],
    whoItAppliesTo: 'Empresas y personas naturales que requieren defender judicialmente sus derechos.',
    whatProblemItSolves: 'Recupera acreencias y defiende con firmeza el patrimonio ante reclamaciones judiciales.',
    requirements: [
      'Copia del expediente o documentos materia de litigio.',
      'Pruebas documentales y contratos de respaldo.'
    ]
  },
  {
    slug: 'derecho-laboral-corporativo',
    title: 'Derecho Laboral Empresarial',
    shortDesc: 'Gestión preventiva de relaciones laborales, prevención de multas SUNAFIL y defensa procesal.',
    img: imgLegalizacion,
    heroImg: imgLegalizacion,
    tiempoEstimado: 'Atención inmediata',
    teamMemberId: 'carmen-bobadilla',
    detailedDesc: [
      'Auditoría y diseño de contratos de trabajo, reglamentos internos y políticas de compensaciones.',
      'Patrocinio integral ante inspecciones laborales de SUNAFIL y juicios ante juzgados del trabajo.'
    ],
    whoItAppliesTo: 'Empleadores y gerencias de recursos humanos de medianas y grandes empresas.',
    whatProblemItSolves: 'Evita sanciones tributario-laborales y optimiza el clima laboral bajo estricto cumplimiento normativo.',
    requirements: [
      'Planilla laboral y contratos vigentes.',
      'Inspecciones o actas SUNAFIL si aplicaran.'
    ]
  },
  {
    slug: 'derecho-civil-patrimonial',
    title: 'Derecho Civil y Patrimonial',
    shortDesc: 'Protección de bienes familiares, prescripciones adquisitivas, sucesiones y herencias complejas.',
    img: imgVehiculos,
    heroImg: imgVehiculos,
    tiempoEstimado: 'Diagnóstico jurídico en 24h',
    teamMemberId: 'carmen-bobadilla',
    detailedDesc: [
      'Planificación de la sucesión patrimonial familiar, elaboración de testamentos y particiones.',
      'Rectificación de áreas, títulos de propiedad y resolución de disputas patrimoniales.'
    ],
    whoItAppliesTo: 'Familias e inversionistas particulares que buscan asegurar su patrimonio inmobiliario.',
    whatProblemItSolves: 'Otorga certeza jurídica definitiva sobre la titularidad de los bienes.',
    requirements: [
      'Títulos de propiedad o partidas registrables.',
      'Documento de identidad de las partes.'
    ]
  },
  {
    slug: 'derecho-penal-empresarial',
    title: 'Derecho Penal de la Empresa',
    shortDesc: 'Patrocinio especializado en querellas, fraudes corporativos, delitos económicos y compliance penal.',
    img: imgSucesion,
    heroImg: imgSucesion,
    tiempoEstimado: 'Patrocinio procesal urgente',
    teamMemberId: 'roberto-bobadilla',
    detailedDesc: [
      'Asesoría técnica en investigaciones seguidas ante la Fiscalía y Poder Judicial por delitos económicos.',
      'Defensa penal de directivos, administración desleal, apropiaciones e insolvencias de empresas.'
    ],
    whoItAppliesTo: 'Empresarios, ejecutivos y personas jurídicas involucradas en procesos penales.',
    whatProblemItSolves: 'Blinda la libertad y la reputación institucional garantizando el debido proceso.',
    requirements: [
      'Notificaciones fiscales o judiciales.',
      'Documentación contable o corporativa vinculada.'
    ]
  },
  {
    slug: 'contratacion-inmobiliaria',
    title: 'Contratación e Inmobiliario',
    shortDesc: 'Redacción de contratos comerciales, compraventas, arrendamientos y saneamiento registral.',
    img: imgTestamentosNuevo,
    heroImg: imgTestamentosNuevo,
    tiempoEstimado: 'Elaboración contractual en 48h',
    teamMemberId: 'carmen-bobadilla',
    detailedDesc: [
      'Estudio de títulos inmuebles en SUNARP, elaboración de minutas y escrituras públicas.',
      'Asesoría integral en contratos de arrendamiento comercial, promesas de venta y usufructos.'
    ],
    whoItAppliesTo: 'Propietarios, arrendatarios e inversionistas de bienes inmuebles en Trujillo.',
    whatProblemItSolves: 'Garantiza transacciones inmobiliarias blindadas sin vacíos o cláusulas desfavorables.',
    requirements: [
      'Copia de la Partida Registral emitida por SUNARP.',
      'DNI de los contratantes.'
    ]
  }
];
