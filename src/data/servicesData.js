import escriturasImg from '../assets/escrituras.jpg';
import sucesionesImg from '../assets/sucesion.jpg';
import empresasImg from '../assets/empresas.jpg';
import vehiculosImg from '../assets/vehiculos.jpg';

export const servicesData = [
  {
    slug: 'asesoria-legal-multidisciplinaria',
    title: 'Asesoría Legal Integral & Multidisciplinaria',
    shortDesc: 'Orientación estratégica en diversas ramas del Derecho, priorizando siempre los intereses de nuestros clientes.',
    img: escriturasImg,
    heroImg: escriturasImg,
    tiempoEstimado: 'Diagnóstico & consultoría legal inmediata',
    teamMemberId: 'leonardo-uribe',
    detailedDesc: [
      'En Estudio Jurídico Leonardo Uribe & Asociados somos un equipo de abogados comprometidos con brindar asesoría legal confiable y permanente.',
      'Abordamos casos complejos en múltiples disciplinas jurídicas (Civil, Penal, Corporativo y Administrativo), analizando objetivamente los riesgos para proponer la vía más segura.',
      'Nuestra misión es ofrecer soluciones eficaces y justas, acompañando al patrocinado desde la primera consulta hasta la conclusión favorable del proceso.'
    ],
    whoItAppliesTo: 'Personas naturales, empresarios y familias que buscan una consultoría legal cercana, confiable y multidisciplinaria.',
    whatProblemItSolves: 'Previene litigios innecesarios, resuelve controversias con enfoque justo y prioriza los intereses reales del cliente.',
    requirements: [
      'Resumen del caso o consulta legal.',
      'Documentación antecedente disponible.'
    ]
  },
  {
    slug: 'derecho-civil-patrimonial',
    title: 'Derecho Civil & Protección Patrimonial',
    shortDesc: 'Contratos, titularidad de propiedad, cobranzas, demandas de indemnización y procesos sucesorios.',
    img: sucesionesImg,
    heroImg: sucesionesImg,
    tiempoEstimado: 'Patrocinio contencioso especializado',
    teamMemberId: 'mariana-vargas',
    detailedDesc: [
      'Patrocinamos pretensiones civiles de diversa índole, velando por la seguridad de los bienes y derechos patrimoniales de nuestros representados.',
      'Redactamos y evaluamos contratos de compraventa, arrendamientos, minutas de garantía y asumimos la representación en juicios por responsabilidad civil contractual y extracontractual.',
      'Brindamos asesoría en sucesiones intestadas, testamentos y partición judicial de masas hereditarias.'
    ],
    whoItAppliesTo: 'Propietarios, arrendadores, compradores, coherederos y ciudadanos con disputas civiles.',
    whatProblemItSolves: 'Protege el patrimonio frente a incumplimientos o vicios contractuales y asegura una adjudicación justa de bienes.',
    requirements: [
      'Documento Nacional de Identidad.',
      'Contratos, escrituras públicas, notificaciones notariales o cartas antecedentes.'
    ]
  },
  {
    slug: 'derecho-penal-defensa',
    title: 'Derecho Penal & Defensa Procesal',
    shortDesc: 'Patrocinio defensivo riguroso en diligencias preliminares, investigaciones fiscales y procesos penales contenciosos.',
    img: empresasImg,
    heroImg: empresasImg,
    tiempoEstimado: 'Defensa técnica procesal 24/7',
    teamMemberId: 'leonardo-uribe',
    detailedDesc: [
      'Ofrecemos una defensa técnica penal firme y respetuosa del debido proceso legal, interviniendo desde las citaciones preliminares del Ministerio Público.',
      'Articulamos una estrategia probatoria personalizada, interponiendo medios de defensa técnica, tutelas de derechos y recursos procesales oportunos.'
    ],
    whoItAppliesTo: 'Personas naturales e investigados que requieren patrocinio procesal especializado e inmediato.',
    whatProblemItSolves: 'Evita violaciones a las garantías procesales y asegura una defensa penal articulada con solvencia técnica.',
    requirements: [
      'Cédula de notificación o disposición fiscal de apertura de investigación.',
      'Relación de hechos e imputaciones.'
    ]
  },
  {
    slug: 'derecho-corporativo-empresarial',
    title: 'Derecho Corporativo & Empresarial',
    shortDesc: 'Constitución legal de sociedades, contratos corporativos, estatutos, poderes y solución de controversias comerciales.',
    img: vehiculosImg,
    heroImg: vehiculosImg,
    tiempoEstimado: 'Asesoría corporativa permanente',
    teamMemberId: 'mariana-vargas',
    detailedDesc: [
      'Asesoramos a emprendedores, PYMEs y empresas en la constitución societaria, diseño de estructuras de gobierno corporativo y acuerdos de accionistas.',
      'Brindamos acompañamiento en la negociación y redacción de contratos comerciales, así como en la prevención y arbitraje de contingencias empresariales.'
    ],
    whoItAppliesTo: 'Empresarios, socios, inversionistas y gerentes que buscan blindar jurídicamente sus actividades comerciales.',
    whatProblemItSolves: 'Otorga solidez legal a las operaciones comerciales y previene controversias societarias paralizantes.',
    requirements: [
      'Vigencia de poderes o ficha RUC de la empresa.',
      'Proyecto de minuta o contrato objeto de consulta.'
    ]
  }
];
