import articleNotario from '../assets/article-notario.png';
import articleEmpresa from '../assets/article-empresa.png';
import articleRegistral from '../assets/article-registral.png';

export const articlesData = [
  {
    id: 1,
    slug: 'arbitraje-comercial-solucion-disputas',
    title: 'El arbitraje comercial como alternativa eficaz para la solución de disputas societarias',
    description: 'Análisis sobre las ventajas de incluir cláusulas arbitrales en contratos corporativos frente a la vía judicial convencional.',
    date: '02 AGO, 2026',
    authorId: 'carlos-escalante',
    category: 'Derecho Corporativo',
    image: articleNotario,
    content: `
      <p>En el ámbito empresarial actual, la celeridad y la especialización técnica son factores determinantes al momento de resolver controversias entre socios o empresas contratantes.</p>
      
      <p>En Escalante, Ulloa & Asociados asesoramos a corporaciones regionales en la redacción e implementación estratégica de convenios arbitrales que garantizan procesos confidenciales, técnicos y de rápida resolución.</p>
      
      <h3>1. Celeridad y Confidencialidad</h3>
      <p>A diferencia de los litigios judiciales que pueden extenderse por años, un arbitraje institucional suele resolverse mediante un laudo definitivo en cuestión de meses, manteniendo a salvo la reputación comercial de las partes.</p>
      
      <h3>2. Especialización de los Árbitros</h3>
      <p>Las partes tienen la facultad de elegir árbitros con demostrada trayectoria en la materia específica de la disputa, garantizando resoluciones de alta solvencia técnica y jurídica.</p>
    `
  },
  {
    id: 2,
    slug: 'compliance-penal-prevencion-riesgos',
    title: 'Modelos de prevención penal corporativa (Compliance) en la empresa moderna',
    description: 'Cómo eximir de responsabilidad penal a la persona jurídica mediante un sistema de control interno eficaz.',
    date: '24 JUL, 2026',
    authorId: 'miguel-ulloa',
    category: 'Penal de la Empresa',
    image: articleEmpresa,
    content: `
      <p>La Ley N° 30424 ha transformado el escenario de responsabilidad de las empresas frente a delitos económicos, tributarios y de corrupción.</p>
      
      <p>Implementar un Modelo de Prevención Penal adecuado previene contingencias graves y constituye una eximente de responsabilidad administrativa para la compañía.</p>
    `
  },
  {
    id: 3,
    slug: 'saneamiento-propiedad-patrimonial',
    title: 'Aspectos esenciales para la protección del patrimonio inmobiliario en La Libertad',
    description: 'Estrategias civiles y registrales para blindar terrenos, locales comerciales y propiedades residenciales.',
    date: '10 JUL, 2026',
    authorId: 'miguel-ulloa',
    category: 'Derecho Civil',
    image: articleRegistral,
    content: `
      <p>El saneamiento físico-legal de propiedades en la región requiere un análisis minucioso de títulos de dominio, cargas y gravámenes ante Registros Públicos.</p>
    `
  }
];
