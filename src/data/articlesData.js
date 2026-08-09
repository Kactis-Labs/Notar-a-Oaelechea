import articleNotario from '../assets/article-notario.png';
import articleSucesion from '../assets/article-sucesion.png';
import articleTestamento from '../assets/article-testamento.png';
import articleEmpresa from '../assets/article-empresa.png';
import articleRegistral from '../assets/article-registral.png';
import articlePoderes from '../assets/article-poderes.png';

export const articlesData = [
  {
    id: 1,
    slug: 'gobierno-corporativo-empresas-familiares',
    title: 'Buen gobierno corporativo en la continuidad de empresas familiares',
    description: 'Estrategias legales para estructurar protocolos de familia, directorios independientes y sucesión corporativa.',
    date: '18 MAY, 2026',
    authorId: 'roberto-medina',
    category: 'Derecho Corporativo',
    image: articleNotario,
    content: `
      <p>La adopción de prácticas de buen gobierno corporativo es un pilar indispensable para garantizar la trascendencia de la empresa familiar a través de las generaciones.</p>
      
      <p>Contar con órganos de gobierno estructurados reduce los conflictos de interés y fortalece la confianza de inversionistas e instituciones financieras.</p>
    `
  },
  {
    slug: 'mitigacion-riesgos-penales-compliance',
    id: 2,
    title: 'Mitigación de riesgos penales mediante sistemas de Compliance',
    description: 'Cómo implementar controles operacionales efectivos según la Ley N° 30424 para eximir de responsabilidad a la empresa.',
    date: '10 MAY, 2026',
    authorId: 'roberto-medina',
    category: 'Compliance',
    image: articleSucesion,
    content: `
      <p>El diseño e implementación de un modelo de prevención anticorrupción no es solo una exigencia normativa, sino una ventaja competitiva esencial en las contrataciones corporativas e internacionales.</p>
    `
  },
  {
    slug: 'auditoria-tributaria-preventiva',
    id: 3,
    title: 'Diagnóstico y auditoría tributaria preventiva para el ejercicio 2026',
    description: 'Revisión técnica de inconsistencias fiscales para prevenir acotaciones y multas innecesarias de la SUNAT.',
    date: '04 MAY, 2026',
    authorId: 'sofia-medina',
    category: 'Tributario',
    image: articleTestamento,
    content: `
      <p>La fiscalización electrónica de la SUNAT exige que las organizaciones realicen auditorías tributarias internas periódicas sobre sus operaciones e intercambios comerciales.</p>
    `
  },
  {
    slug: 'planeamiento-patrimonial-activos-inmobiliarios',
    id: 4,
    title: 'Planeamiento patrimonial y protección de activos inmobiliarios',
    description: 'Herramientas jurídicas para brindar la máxima seguridad a las inversiones en bienes raíces e infraestructura.',
    date: '28 APR, 2026',
    authorId: 'sofia-medina',
    category: 'Patrimonial',
    image: articleEmpresa,
    content: `
      <p>El saneamiento registral oportuno y la constitución de estructurasHolding garantizan la inembargabilidad y la valorización continua del patrimonio corporativo.</p>
    `
  },
  {
    slug: 'arbitraje-comercial-solucion-eficiente',
    id: 5,
    title: 'El arbitraje comercial como mecanismo eficiente de resolución de disputas',
    description: 'Ventajas de incluir cláusulas arbitrales en contratos de alta cuantía frente a los litigios judiciales tradicionales.',
    date: '20 APR, 2026',
    authorId: 'roberto-medina',
    category: 'Arbitraje',
    image: articleRegistral,
    content: `
      <p>La confidencialidad, especialización técnica de los árbitros y la rapidez procesal convierten al arbitraje en la herramienta idónea para solucionar controversias entre socios o competidores.</p>
    `
  },
  {
    slug: 'reestructuracion-contratos-mercantiles',
    id: 6,
    title: 'Reestructuración de contratos mercantiles y acuerdos de socios',
    description: 'Cómo adaptar los convenios estatutarios frente a la incorporación de nuevos inversionistas o rondas de capital.',
    date: '12 APR, 2026',
    authorId: 'roberto-medina',
    category: 'Derecho Empresarial',
    image: articlePoderes,
    content: `
      <p>Los convenios de accionistas bien negociados previenen parálisis societarias y regulan con transparencia los mecanismos de salida y valorización empresarial.</p>
    `
  }
];
