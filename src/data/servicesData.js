import imgEscrituras from '../assets/escrituras.jpg';
import imgEmpresas from '../assets/empresas.jpg';
import imgSucesion from '../assets/sucesion.jpg';
import imgLegalizacion from '../assets/legalizacion.jpg';
import imgVehiculos from '../assets/vehiculos.jpg';

export const servicesData = [
  {
    slug: 'derecho-civil',
    title: 'Derecho Civil & Patrimonial',
    shortDesc: 'Resolución estratégica de conflictos patrimoniales, contratos, saneamiento inmobiliario y responsabilidad civil.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop',
    heroImg: imgEscrituras,
    tiempoEstimado: 'Atención prioritaria e inmediata',
    teamMemberId: 'carlos-olaechea',
    detailedDesc: [
      'El Derecho Civil constituye la columna vertebral de la protección del patrimonio familiar y empresarial. En Estudio Jurídico Carlos & Asociados brindamos patrocinio legal de alta precisión en materia contractual, derechos reales y saneamiento de propiedades.',
      'Representamos a nuestros clientes en litigios civiles complejos, prescripciones adquisitivas, reivindicaciones de inmuebles y procesos de indemnización por daños y perjuicios ante los tribunales de justicia.',
      'Analizamos minuciosamente cada documento para blindar sus transacciones contractuales y evitar contingencias judiciales futuras.'
    ],
    whoItAppliesTo: 'Personas naturales, familias y propietarios de inmuebles que requieran seguridad jurídica incuestionable.',
    whatProblemItSolves: 'Previene pérdidas patrimoniales, resuelve disputas contractuales y asegura la titularidad registral legítima de sus bienes.',
    requirements: [
      'Documentos de identidad vigentes de las partes.',
      'Títulos de propiedad, partidas registrales de SUNARP o contratos objeto de análisis.',
      'Medios probatorios documentales del caso.',
      'Entrevista inicial de diagnóstico legal con nuestro equipo de especialistas.'
    ]
  },
  {
    slug: 'derecho-corporativo',
    title: 'Derecho Corporativo & Empresarial',
    shortDesc: 'Asesoramiento legal integral a empresas, reorganizaciones corporativas, contratos mercantiles y gobierno de sociedad.',
    img: imgEmpresas,
    heroImg: imgEmpresas,
    tiempoEstimado: 'Consultoría continua & Proyectos a medida',
    teamMemberId: 'carlos-olaechea',
    detailedDesc: [
      'Acompañamos a las empresas desde su constitución hasta operaciones corporativas complejas como fusiones, adquisiciones y reorganizaciones societarias.',
      'Redactamos y negociamos contratos comerciales nacionales e internacionales, garantizando que los intereses económicos de su organización permanezcan resguardados en todo momento.',
      'Prevenimos riesgos normativos y laborales mediante auditorías jurídicas preventivas (Due Diligence) de alto nivel.'
    ],
    whoItAppliesTo: 'Emprendedores, pequeñas, medianas y grandes empresas que buscan respaldo corporativo continuo.',
    whatProblemItSolves: 'Garantiza el cumplimiento normativo (compliance), estructura societaria eficiente y protección total de los accionistas.',
    requirements: [
      'Ficha RUC y Partida Registral de la sociedad en SUNARP.',
      'Vigencia de poder del representante legal.',
      'Estatutos y pactos societarios vigentes.'
    ]
  },
  {
    slug: 'derecho-penal',
    title: 'Derecho Penal & Defensa Técnica',
    shortDesc: 'Defensa penal estratégica de alta rigurosidad ante el Ministerio Público y el Poder Judicial.',
    img: imgSucesion,
    heroImg: imgSucesion,
    tiempoEstimado: 'Asistencia urgente 24/7',
    teamMemberId: 'carlos-olaechea',
    detailedDesc: [
      'Asumimos la representación y defensa técnica procesal en investigaciones preliminares, juzgamientos y procesos penales complejos.',
      'Especializados en delitos económicos, delitos contra el patrimonio, responsabilidad penal empresarial y carpetas fiscales de alta envergadura.',
      'Formulamos teorías del caso sólidas respaldadas en dogmática penal moderna y probatoria rigurosa para defender la libertad y el honor de nuestros patrocinados.'
    ],
    whoItAppliesTo: 'Personas investigadas, procesadas o agraviadas que requieran defensa letrada férrea y transparente.',
    whatProblemItSolves: 'Evita arbitrariedades procesales, protege la libertad personal y cautela la presunción de inocencia.',
    requirements: [
      'Copia de la disposición fiscal, notificación o citación judicial.',
      'Documento Nacional de Identidad del patrocinado o familiar directo.',
      'Acreditación de domicilio y medios probatorios iniciales.'
    ]
  },
  {
    slug: 'derecho-laboral',
    title: 'Derecho Laboral & Relaciones de Trabajo',
    shortDesc: 'Gestión estratégica de relaciones laborales, prevención de contingencias, despidos e inspecciones SUNAFIL.',
    img: imgLegalizacion,
    heroImg: imgLegalizacion,
    tiempoEstimado: 'Asesoría inmediata',
    teamMemberId: 'carlos-olaechea',
    detailedDesc: [
      'Brindamos asesoría en la contratación laboral, reglamentos internos de trabajo y auditorías de planillas para prevenir sanciones administrativas.',
      'Patrocinamos a trabajadores y empleadores en procesos judiciales laborales sobre indemnizaciones por despido arbitrario, pago de beneficios sociales y arbitrajes.',
      'Representamos a nuestros clientes en procedimientos de inspección ante la SUNAFIL y audiencias de conciliación.'
    ],
    whoItAppliesTo: 'Empresas que buscan paz laboral y trabajadores que exigen la defensa firme de sus derechos constitucionales.',
    whatProblemItSolves: 'Mitiga multas administrativas severas y resuelve controversias laborales con el menor impacto económico posible.',
    requirements: [
      'Contratos de trabajo y boletas de pago históricas.',
      'Comunicaciones, cartas de preaviso o liquidaciones de beneficios sociales.',
      'Registros de asistencia y constancias de cese.'
    ]
  },
  {
    slug: 'asesoria-legal-integral',
    title: 'Asesoría Legal Integral & Consultoría',
    shortDesc: 'Patrocinio jurídico permanente para familias, inversionistas y empresas con atención preferencial.',
    img: imgVehiculos,
    heroImg: imgVehiculos,
    tiempoEstimado: 'Plan de Retainer mensual o por consulta',
    teamMemberId: 'carlos-olaechea',
    detailedDesc: [
      'Un servicio de consejería legal multidisciplinaria diseñado para resolver dudas legales del día a día antes de que se conviertan en litigios costosos.',
      'Acompañamos a nuestros clientes en negociaciones complejas, mediaciones familiares y transacciones de alto valor patrimonial.',
      'Acceso directo a nuestro equipo de abogados sénior con atención prioritaria presencial y remota.'
    ],
    whoItAppliesTo: 'Familias, empresarios e inversionistas que exigen un departamento legal a su disposición.',
    whatProblemItSolves: 'Ofrece tranquilidad absoluta al contar con orientación jurídica inmediata ante cualquier eventualidad.',
    requirements: [
      'Reunión de diagnóstico inicial presencial o virtual.',
      'Suscripción del acuerdo de confidencialidad y patrocinio.'
    ]
  }
];
