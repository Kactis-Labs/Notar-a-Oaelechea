import imgEscrituras from '../assets/escrituras.jpg';
import imgTestamentosNuevo from '../assets/testamentos.png';
import imgVehiculos from '../assets/vehiculos.jpg';
import imgSucesion from '../assets/sucesion.jpg';
import imgLegalizacion from '../assets/legalizacion.jpg';
import imgEmpresas from '../assets/empresas.jpg';

export const servicesData = [
  {
    slug: 'derecho-corporativo',
    title: 'Derecho Corporativo y Empresarial',
    shortDesc: 'Asesoría estratégica en contratos mercantiles, buen gobierno corporativo, fusiones y reestructuración societaria.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop',
    heroImg: imgEscrituras,
    tiempoEstimado: 'Atención Permanente y Personalizada',
    teamMemberId: 'carlos-perez',
    detailedDesc: [
      'Brindamos un acompañamiento legal integral a corporaciones, PYMEs y grupos empresariales en el diseño, negociación y ejecución de sus operaciones comerciales.',
      'Estructuramos estatutos societarios, convenios de accionistas, reorganizaciones empresariales y planeamiento legal preventivo para proteger el valor estratégico del negocio.',
      'Asesoramos a directorios y gerencias en el cumplimiento regulatorio societario, auditorías legales (Due Diligence) y gestión de riesgos corporativos.'
    ],
    whoItAppliesTo: 'Empresas, startups, accionistas e inversionistas que buscan solidez jurídica en su modelo de negocio y operaciones comerciales.',
    whatProblemItSolves: 'Previene contingencias legales onerosas, conflictos entre socios y vacíos normativos en contratos y transacciones de negocio.',
    requirements: [
      'Ficha RUC y vigencia de poder de los representantes legales.',
      'Estatutos o contratos marco relacionados con la consulta.',
      'Información básica sobre la estructura accionaria de la empresa.'
    ]
  },
  {
    slug: 'derecho-civil-patrimonial',
    title: 'Derecho Civil y Patrimonial',
    shortDesc: 'Protección de activos, derecho inmobiliario, contratos civiles complejos y planificación sucesoria.',
    img: imgTestamentosNuevo,
    heroImg: imgTestamentosNuevo,
    tiempoEstimado: 'Asesoría Inmediata',
    teamMemberId: 'mariana-vasquez',
    detailedDesc: [
      'Ofrecemos patrocinio legal y asesoramiento técnico en materia de propiedad, derechos reales, contratación civil y saneamiento físico-legal de inmuebles.',
      'Diseñamos esquemas de planificación patrimonial y sucesoria (testamentos, anticipos de legítima y constitución de patrimonio familiar) adaptados a la realidad de cada cliente.',
      'Defendemos los intereses patrimoniales de personas y empresas en procesos de indemnización por daños y perjuicios, resolución de contratos y reivindicación de bienes.'
    ],
    whoItAppliesTo: 'Personas naturales y jurídicas que requieran seguridad jurídica en el saneamiento o disposición de sus bienes patrimoniales.',
    whatProblemItSolves: 'Evita vicios de nulidad en transacciones inmobiliarias y protege el patrimonio personal y familiar frente a reclamaciones indebidas.',
    requirements: [
      'Documento de Identidad (DNI o CE) vigente de los solicitantes.',
      'Copia literal o partida electrónica del bien inmueble (SUNARP).',
      'Antecedentes contractuales o documentación del caso.'
    ]
  },
  {
    slug: 'derecho-laboral-empresarial',
    title: 'Derecho Laboral Empresarial',
    shortDesc: 'Consultoría laboral preventiva, contratación estratégica, auditorías de planillas y patrocinio en inspecciones SUNAFIL.',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop',
    heroImg: imgSucesion,
    tiempoEstimado: 'Asesoría Continua',
    teamMemberId: 'mariana-vasquez',
    detailedDesc: [
      'Asesoramos a las áreas de gestión humana en la elaboración de contratos de trabajo, políticas de compensación, reglamentos internos y protocolos de seguridad e higiene laboral.',
      'Patrocinamos a las empresas en procedimientos de inspección ante la SUNAFIL, procedimientos administrativos sancionadores y juicios laborales por despido arbitrario o pago de beneficios.',
      'Diseñamos planes preventivos de desvinculación laboral y reestructuración de personal para minimizar la conflictividad laboral interna.'
    ],
    whoItAppliesTo: 'Empresas e empleadores que buscan mantener un clima laboral en regla y alineado con la legislación vigente en el Perú.',
    whatProblemItSolves: 'Reduce el riesgo de multas laborales gravísimas y demandas judiciales por incumplimiento de obligaciones sociolaborales.',
    requirements: [
      'RUC y datos de la empresa.',
      'Contratos de trabajo y documentos objeto de revisión.',
      'Requerimientos o notificaciones de la SUNAFIL (si aplica).'
    ]
  },
  {
    slug: 'derecho-penal-empresarial',
    title: 'Derecho Penal Empresarial',
    shortDesc: 'Defensa técnica especializada en delitos económicos, tributarios, corporativos y programas de Compliance Penal.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop',
    heroImg: imgVehiculos,
    tiempoEstimado: 'Atención de Urgencia 24/7',
    teamMemberId: 'carlos-perez',
    detailedDesc: [
      'Asumimos la defensa legal y patrocinio de ejecutivos, directores y personas jurídicas en investigaciones fiscales y procesos penales corporativos.',
      'Especialistas en delitos contra el patrimonio, fraude en la administración de personas jurídicas, delitos tributarios, ambientales y laborales.',
      'Diseñamos e implementamos modelos de prevención de delitos (Compliance Penal) según la Ley N° 30424 para eximir de responsabilidad a las empresas.'
    ],
    whoItAppliesTo: 'Directores, gerentes, empresarios y firmas que enfrentan contingencias penales o buscan prevenir riesgos delictivos en su operación.',
    whatProblemItSolves: 'Garantiza una defensa penal incisiva y rigurosa, salvaguardando la reputación institucional y la libertad de los administradores.',
    requirements: [
      'Copia de la disposición fiscal, notificación policial o citación judicial.',
      'Documentación sustentatoria de las operaciones cuestionadas.',
      'Poder de representación legal.'
    ]
  },
  {
    slug: 'asesoria-legal-integral',
    title: 'Asesoría Legal Integral y Litigios',
    shortDesc: 'Consultoría legal permanente 360°, patrocinio judicial y resolución alternativa de controversias (Arbitraje).',
    img: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=600&auto=format&fit=crop',
    heroImg: imgLegalizacion,
    tiempoEstimado: 'Planes Retainer Mensuales',
    teamMemberId: 'carlos-perez',
    detailedDesc: [
      'Ofrecemos un servicio de consultoría jurídica externa continua que actúa como el departamento legal interno de su organización.',
      'Representamos a nuestros clientes ante juzgados civiles, laborales, contencioso-administrativos y tribunales arbitrales nacionales e internacionales.',
      'Evaluamos técnicamente las probabilidades de éxito de cada proceso, privilegiando la negociación y conciliación estratégica cuando resulta más beneficiosa.'
    ],
    whoItAppliesTo: 'Compañías que requieren un respaldo jurídico permanente sin asumir los costos de un departamento legal interno completo.',
    whatProblemItSolves: 'Asegura una respuesta rápida y efectiva frente a cualquier duda o litigio legal cotidiano en la conducción del negocio.',
    requirements: [
      'Entrevista diagnóstica previa.',
      'Firma del convenio de asesoría permanente (Retainer Agreement).',
      'Acceso a antecedentes jurídicos relevantes de la firma.'
    ]
  },
  {
    slug: 'contratacion-con-el-estado',
    title: 'Contratación con el Estado y Arbitraje',
    shortDesc: 'Asesoramiento en licitaciones públicas, ejecución contractual ante entidades estatales y defensa en procesos arbitrales.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop',
    heroImg: imgEmpresas,
    tiempoEstimado: 'Patrocinio Especializado',
    teamMemberId: 'mariana-vasquez',
    detailedDesc: [
      'Acompañamos a proveedores y contratistas del Estado en todas las fases de los procesos de selección y licitaciones públicas.',
      'Asesoramos en la resolución de discrepancias durante la ejecución contractual (ampliaciones de plazo, adicionales de obra, penalidades y valorizaciones).',
      'Asumimos la defensa técnica en procesos de conciliación y arbitrajes en contratación pública regulados por la Ley de Contrataciones del Estado.'
    ],
    whoItAppliesTo: 'Empresas contratistas, consorcios y proveedores que participan en compras y licitaciones públicas.',
    whatProblemItSolves: 'Evita descalificaciones de ofertas, penalidades injustificadas y rescisiones de contrato ante entidades públicas.',
    requirements: [
      'Bases del proceso de selección o contrato de obra/servicio.',
      'Registro Nacional de Proveedores (RNP) vigente.',
      'Comunicaciones formales intercambiadas con la entidad pública.'
    ]
  }
];
