import imgEmpresas from '../assets/empresas.jpg';
import imgEscrituras from '../assets/escrituras.jpg';
import imgLegalizacion from '../assets/legalizacion.jpg';
import imgVehiculos from '../assets/vehiculos.jpg';
import imgTestamentosNuevo from '../assets/testamentos.png';
import imgSucesion from '../assets/sucesion.jpg';

export const servicesData = [
  {
    slug: 'derecho-mercantil-societario',
    title: 'Derecho Mercantil y Societario',
    shortDesc: 'Estructuración de sociedades, fusiones, gobernanza corporativa y contratos comerciales de alto nivel.',
    img: imgEmpresas,
    heroImg: imgEmpresas,
    tiempoEstimado: 'Atención prioritaria y continúa',
    teamMemberId: 'alonso-solano',
    detailedDesc: [
      'Asesoramos a empresas locales y regionales en todo el ciclo de vida corporativo: desde la constitución estratégica de sociedades hasta reestructuraciones patrimoniales y acuerdos entre accionistas.',
      'Brindamos soluciones en gobierno corporativo, redacción de acuerdos comerciales complejos y auditorías preventivas (Due Diligence) para operaciones seguras.',
      'Nuestro enfoque mercantil está orientado a maximizar el crecimiento comercial protegiendo el patrimonio de los socios frente a contingencias registrales o societarias.'
    ],
    whoItAppliesTo: 'Empresas constituidas, startups en expansión, grupos familiares comerciales e inversionistas en la región norte y Lima.',
    whatProblemItSolves: 'Previene conflictos entre socios, asegura la validez de acuerdos comerciales y evita sanciones administrativas o nulidades corporativas.',
    requirements: [
      'RUC de la empresa y vigencia de poder actualizada.',
      'Estatutos sociales o pacto social vigente.',
      'Identificación de los representantes legales o apoderados.',
      'Documentación del proyecto o transacción a evaluar.'
    ]
  },
  {
    slug: 'derecho-civil',
    title: 'Derecho Civil y Contratos',
    shortDesc: 'Asesoría integral en contratos patrimoniales, saneamiento inmobiliario y solución de disputas civiles.',
    img: imgEscrituras,
    heroImg: imgEscrituras,
    tiempoEstimado: 'Evaluación inicial en 24h',
    teamMemberId: 'sebastian-alvarado',
    detailedDesc: [
      'Ofrecemos representación y estructuración legal en actos contractuales, obligaciones, responsabilidad civil y derechos reales.',
      'Especialistas en saneamiento físico-legal de predios en Trujillo y Lima, garantizando títulos impecables para transacciones o protección patrimonial.',
      'Diseñamos estrategias preventivas para evitar litigios o representar con solidez los intereses civiles de personas y empresas en fueros judiciales y arbitrales.'
    ],
    whoItAppliesTo: 'Personas naturales y jurídicas con necesidades de saneamiento de propiedad, negociación de contratos complejos o disputas civiles.',
    whatProblemItSolves: 'Elimina vicios en títulos de propiedad, previene incumplimientos contractuales y resguarda el patrimonio familiar o empresarial.',
    requirements: [
      'Documento de Identidad (DNI/CE/Pasaporte).',
      'Copia literal o partida electrónica de los bienes involucrados.',
      'Contratos previos o antecedentes del caso.',
      'Comprobantes o documentos probatorios del derecho reclamado.'
    ]
  },
  {
    slug: 'derecho-penal',
    title: 'Derecho Penal Corporativo',
    shortDesc: 'Defensa técnica especializada y prevención de delitos económicos y corporativos.',
    img: imgVehiculos,
    heroImg: imgVehiculos,
    tiempoEstimado: 'Asistencia inmediata',
    teamMemberId: 'sebastian-alvarado',
    detailedDesc: [
      'Asesoramos a ejecutivos, directores y empresas en investigaciones y procesos penales relacionados con delitos económicos, patrimoniales y laborales.',
      'Implementamos programas de cumplimiento (Compliance Penal) para mitigar riesgos de responsabilidad penal corporativa.',
      'Brindamos representación frontal y técnica ante el Ministerio Público y el Poder Judicial con enfoque garantista y diligente.'
    ],
    whoItAppliesTo: 'Directores, gerentes, accionistas y empresas expuestas a contingencias penales o denuncias patrimoniales.',
    whatProblemItSolves: 'Protege la reputación y libertad de los representados, conteniendo riesgos penales corporativos a tiempo.',
    requirements: [
      'Notificación Fiscal o Judicial (de ser el caso).',
      'Documentación sustentatoria del cargo u operación cuestionada.',
      'Identificación del investigado o representante legal.'
    ]
  },
  {
    slug: 'derecho-administrativo-laboral',
    title: 'Derecho Administrativo y Laboral',
    shortDesc: 'Gestión de relaciones laborales corporativas, auditorías de cumplimiento y procedimientos con el Estado.',
    img: imgLegalizacion,
    heroImg: imgLegalizacion,
    tiempoEstimado: 'Asesoría continua',
    teamMemberId: 'alonso-solano',
    detailedDesc: [
      'Brindamos consultoría estratégica en contrataciones laborales, inspecciones SUNAFIL, licencias municipales y regulación sectorial.',
      'Acompañamos a las empresas en procedimientos administrativos ante entidades públicas para evitar multas o paralizaciones operativas.',
      'Estructuramos políticas internas de trabajo, convenios de confidencialidad y desvinculaciones laborales conformes a la normativa vigente.'
    ],
    whoItAppliesTo: 'Empresas con personal a cargo y negocios que interactúan constantemente con entidades fiscalizadoras del Estado.',
    whatProblemItSolves: 'Reduce sustancialmente contingencias por multas administrativas y reclamos laborales individuales o colectivos.',
    requirements: [
      'Planilla electrónica y contratos vigentes.',
      'Expediente administrativo o acta de inspección (si aplica).',
      'RUC y vigencia de poder de la empresa.'
    ]
  },
  {
    slug: 'fraudes-bancarios',
    title: 'Práctica en Fraudes Bancarios',
    shortDesc: 'Defensa técnica y recuperación de fondos ante transacciones no reconocidas y fraudes financieros.',
    img: imgTestamentosNuevo,
    heroImg: imgTestamentosNuevo,
    tiempoEstimado: 'Intervención de emergencia (24h)',
    teamMemberId: 'alonso-solano',
    detailedDesc: [
      'Práctica especializada orientada a la protección y recuperación patrimonial frente a estafas electrónicas, suplantación de identidad y operaciones bancarias no autorizadas.',
      'Ejecutamos acciones legales inmediatas ante el sistema financiero, INDECOPI y fiscalías especializadas en ciberdelitos.',
      'Realizamos peritajes informáticos y análisis del deber de seguridad de las entidades bancarias para la restitución integra de los fondos sustraídos.'
    ],
    whoItAppliesTo: 'Empresas y personas victimas de transferencias no autorizadas, phishing, clonación de tarjetas o fraudes corporativos.',
    whatProblemItSolves: 'Exige la responsabilidad a la entidad financiera y busca la restitución inmediata del dinero mediante la vía administrativa y judicial.',
    requirements: [
      'Estados de cuenta con los consumos o transferencias no reconocidas.',
      'Reclamo formal presentado ante el banco y constancia de bloqueo.',
      'Denuncia policial por ciberdelito o fraude.',
      'Capturas de pantalla o correos sospechosos vinculados.'
    ]
  },
  {
    slug: 'prevencion-riesgos-legales',
    title: 'Prevención de Riesgos Legales',
    shortDesc: 'Diagnóstico jurídico preventivo integral para resguardar las operaciones en la región norte y Lima.',
    img: imgSucesion,
    heroImg: imgSucesion,
    tiempoEstimado: 'Diagnóstico inicial en 48h',
    teamMemberId: 'sebastian-alvarado',
    detailedDesc: [
      'Un servicio proactivo diseñado para blindar legalmente las operaciones de empresas y familias antes de que surja un conflicto.',
      'Evaluamos vacíos contractuales, contingencias tributario-laborales y vulnerabilidades patrimoniales para diseñar una hoja de ruta protectora.',
      'Orientado por Alonso Solano y Sebastián Alvarado para brindar a los clientes de Trujillo y Lima la certeza que necesitan para operar con tranquilidad.'
    ],
    whoItAppliesTo: 'Empresas familiares, pymes y personas que buscan orden y certeza legal de su patrimonio.',
    whatProblemItSolves: 'Evita pleitos futuros costosos anticipándose a contingencias antes de que se conviertan en pérdidas económicas.',
    requirements: [
      'Resumen de la estructura comercial o bienes del cliente.',
      'Reunión inicial de diagnóstico con los socios principales.'
    ]
  }
];

