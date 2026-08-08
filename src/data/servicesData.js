import imgEscrituras from '../assets/escrituras.jpg';
import imgEmpresas from '../assets/empresas.jpg';
import imgSucesion from '../assets/sucesion.jpg';
import imgLegalizacion from '../assets/legalizacion.jpg';
import imgVehiculos from '../assets/vehiculos.jpg';

export const servicesData = [
  {
    slug: 'derecho-penal',
    title: 'Derecho Penal y Defensa Técnica',
    shortDesc: 'Defensa penal estratégica de alta rigurosidad procesal ante el Ministerio Público y Poder Judicial con destacada tasa de éxito.',
    img: imgSucesion,
    heroImg: imgSucesion,
    tiempoEstimado: 'Asistencia Urgente 24/7',
    teamMemberId: 'carlos-olaechea',
    detailedDesc: [
      'Asumimos la representación e intervención estratégica procesal en investigaciones preliminares, juzgamientos y apelaciones penales complejas.',
      'Especializados en delitos económicos, delitos contra la administración pública, delitos contra el patrimonio, responsabilidad penal empresarial y querellas por honor.',
      'Nuestra firma destaca por construir teorías del caso sólidas e inexpugnables respaldadas en probatoria rigurosa, garantizando una defensa técnica comprometida en ganar causas difíciles.'
    ],
    whoItAppliesTo: 'Personas investigadas, procesadas o agraviadas que exigen el patrocinio de penalistas de incuestionable prestigio y trayectoria.',
    whatProblemItSolves: 'Evita decisiones judiciales o fiscales arbitrarias, resguarda la libertad individual y salvaguarda la reputación y el honor personal.',
    requirements: [
      'Notificación, citación fiscal o resolución judicial procesal.',
      'Documento de Identidad del patrocinado o familiar directo.',
      'Medios probatorios documentales iniciales.',
      'Concurrencia a entrevista privada de diagnóstico legal.'
    ]
  },
  {
    slug: 'derecho-familia',
    title: 'Derecho de Familia y Patrimonio Familiar',
    shortDesc: 'Protección integral en procesos de divorcio, tenencia, régimen de visitas, alimentos y tutelas de bienes familiares.',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop',
    tiempoEstimado: 'Consultoría Inmediata & Litigio Estratégico',
    teamMemberId: 'mariana-rios',
    detailedDesc: [
      'Brindamos consejería y patrocinio en controversias familiares complejas, velando en todo momento por el bienestar de los menores y la justa división patrimonial.',
      'Patrocinamos divorcios por causal y por mutuo acuerdo, solicitudes de tenencia compartida, liquidación de la sociedad de gananciales y regulación de régimen de visitas.',
      'Abordamos cada caso con estricta reserva, empatía profesional y el rigor legal necesario para alcanzar acuerdos o sentencias favorables sin desgaste innecesario.'
    ],
    whoItAppliesTo: 'Cónyuges, padres e integrantes de la familia que requieran solución firme y pacífica de conflictos familiares.',
    whatProblemItSolves: 'Garantiza la pensión de alimentos oportuna, formaliza la custodia y salvaguarda la integridad de los bienes conyugales.',
    requirements: [
      'Partida de Matrimonio y Partidas de Nacimiento de los hijos.',
      'Relación detallada de bienes muebles e inmuebles adquiridos durante el matrimonio.',
      'Documentos de identidad de los interesados.'
    ]
  },
  {
    slug: 'derecho-civil',
    title: 'Derecho Civil y Saneamiento Inmobiliario',
    shortDesc: 'Resolución de disputas contractuales, saneamiento de propiedades, prescripciones adquisitivas y responsabilidad civil.',
    img: imgEscrituras,
    heroImg: imgEscrituras,
    tiempoEstimado: 'Evaluación y Patrocinio Prioritario',
    teamMemberId: 'carlos-olaechea',
    detailedDesc: [
      'El Derecho Civil garantiza la inviolabilidad del patrimonio privado. En Estudio Jurídico Antinori D\'Angelo patrocinamos litigios civiles complejos ante todas las instancias judiciales.',
      'Expertos en rectificación de áreas y linderos, prescripciones adquisitivas de dominio, desalojos, nulidad de actos jurídicos y acciones reivindicatorias.',
      'Revisamos y elaboramos contratos de alto valor, previniendo vicios o cláusulas perjudiciales para asegurar la validez incuestionable de sus activos.'
    ],
    whoItAppliesTo: 'Propietarios, inversionistas inmobiliarios y familias que exigen la máxima seguridad en la titularidad de sus propiedades.',
    whatProblemItSolves: 'Resuelve desacuerdos contractuales, recupera la posesión ilegítima de bienes e inscribe la propiedad formal en Registros Públicos (SUNARP).',
    requirements: [
      'Títulos de propiedad, Partida Registral SUNARP (Copia Literal).',
      'Contratos, minutas o recibos objeto de controversia.',
      'DNI de los titulares o representantes.'
    ]
  },
  {
    slug: 'derecho-corporativo',
    title: 'Derecho Empresarial y Corporativo',
    shortDesc: 'Asesoramiento societario de alto nivel, contratos mercantiles, fusiones, adquisiciones y blindaje legal a empresas.',
    img: imgEmpresas,
    heroImg: imgEmpresas,
    tiempoEstimado: 'Planes Retainer & Consultoría Permanente',
    teamMemberId: 'fernando-vargas',
    detailedDesc: [
      'Acompañamos a corporaciones, pequeñas y medianas empresas en la gestión de sus contingencias jurídicas societarias y de mercado.',
      'Redactamos estatutos personalizados, pactos de socios, contratos de distribución, franquicias y esquemas de gobierno corporativo eficiente.',
      'Conducimos auditorías legales preventivas (Due Diligence) para evaluar contingencias antes de realizar transacciones, fusiones o inversiones de envergadura.'
    ],
    whoItAppliesTo: 'Empresarios, directores, accionistas e inversionistas que exigen un socio estratégico legal continuo.',
    whatProblemItSolves: 'Previene contingencias laborales y societarias, optimiza el cumplimiento regulatorio (compliance) y protege el patrimonio de los accionistas.',
    requirements: [
      'RUC y Partida Registral de la sociedad.',
      'Vigencia de poder del representante legal.',
      'Estatuto social actualizado.'
    ]
  },
  {
    slug: 'derecho-laboral',
    title: 'Derecho Laboral y Relaciones de Trabajo',
    shortDesc: 'Gestión estratégica de relaciones laborales, defensa ante inspecciones SUNAFIL, indemnizaciones y procesos judiciales.',
    img: imgLegalizacion,
    heroImg: imgLegalizacion,
    tiempoEstimado: 'Patrocinio Inmediato',
    teamMemberId: 'elena-torres',
    detailedDesc: [
      'Asesoramos a empleadores en la optimización de planillas y contratación laboral formal, previniendo contingencias frente a la SUNAFIL.',
      'Patrocinamos a trabajadores y ejecutivos en demandas por despido incausado, pago de beneficios sociales, indemnizaciones y desnaturalización de contratos.',
      'Representamos a nuestros patrocinados en audiencias de conciliación administrativa y procesos laborales ante el Poder Judicial con sobresalientes resultados.'
    ],
    whoItAppliesTo: 'Empresas comprometidas con el cumplimiento laboral y trabajadores exigiendo la justa tutela de sus derechos.',
    whatProblemItSolves: 'Evita multas administrativas cuantiosas y resuelve controversias laborales con máxima celeridad y firmeza.',
    requirements: [
      'Contratos laborales, boletas de pago e informes de asistencia.',
      'Cartas de despido, notificaciones SUNAFIL o liquidaciones de beneficios.'
    ]
  },
  {
    slug: 'asesoria-legal-integral',
    title: 'Asesoría Legal Integral y Consultoría Boutique',
    shortDesc: 'Consejería jurídica permanente y atención letrada preferencial para familias de alto patrimonio y empresas.',
    img: imgVehiculos,
    heroImg: imgVehiculos,
    tiempoEstimado: 'Atención Prioritaria y Directa',
    teamMemberId: 'carlos-olaechea',
    detailedDesc: [
      'Un servicio exclusivo de acompañamiento jurídico integral diseñado para resolver dudas y contingencias legales con celeridad excepcional.',
      'Acompañamos en negociaciones delicadas, mediaciones privadas, fideicomisos y planeamiento sucesorio patrimonial.',
      'Acceso directo e ininterrumpido a nuestros socios sénior, garantizando respaldo profesional ante cualquier eventualidad o litigio emergente.'
    ],
    whoItAppliesTo: 'Familias de alto patrimonio, directores ejecutivos y grupos empresariales que exigen una firma letrada de cabecera.',
    whatProblemItSolves: 'Brinda tranquilidad jurídica absoluta mediante la intervención letrada oportuna antes de que los conflictos escalen judicialmente.',
    requirements: [
      'Reunión confidencial de evaluación de requerimientos.',
      'Suscripción del convenio institucional de patrocinio.'
    ]
  }
];
