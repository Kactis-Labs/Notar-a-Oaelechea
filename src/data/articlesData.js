import articleNotario from '../assets/article-notario.png';
import articleSucesion from '../assets/article-sucesion.png';
import articleEmpresa from '../assets/article-empresa.png';
import articleRegistral from '../assets/article-registral.png';
import articlePoderes from '../assets/article-poderes.png';

export const articlesData = [
  {
    id: 1,
    slug: 'proteccion-ante-fraudes-bancarios',
    title: 'Cómo actuar legalmente ante un fraude bancario o transferencia no autorizada',
    description: 'Guía paso a paso sobre las acciones inmediatas ante estafas electrónicas y la responsabilidad de las entidades financieras.',
    date: '04 AGO, 2026',
    authorId: 'alonso-solano',
    category: 'Fraudes Bancarios',
    image: articleNotario,
    content: `
      <p>Los delitos cibernéticos y las transferencias no autorizadas en el sistema financiero peruano se han incrementado significativamente en los últimos años. Saber cómo actuar dentro de las primeras horas es vital para exigir la devolución de los fondos.</p>
      
      <p>En Solutia Legal Partners contamos con un protocolo de intervención de emergencia para víctimas de estafas bancarias en Lima y la región norte del Perú.</p>
      
      <h3>1. Bloqueo Inmediato y Denuncia Policial</h3>
      <p>Lo primero es llamar a la entidad financiera para bloquear canales digitales y tarjetas, anotando el número de reclamo. Inmediatamente después se debe sentar la denuncia policial ante la División de Investigación de Delitos de Alta Tecnología (DIVINDAT).</p>
      
      <h3>2. Exigir la Responsabilidad del Banco</h3>
      <p>Las entidades financieras están obligadas legalmente a implementar sistemas de autenticación reforzada. Si el banco no validó el patrón inusual del cliente o falló en sus filtros biométricos, incurre en responsabilidad por falta de deber de seguridad.</p>
      
      <h3>3. Acciones ante INDECOPI y Vía Judicial</h3>
      <p>Con la asesoría técnica adecuada, se presenta una denuncia por infracción al Código de Protección y Defensa del Consumidor ante INDECOPI y, paralelamente, acciones civiles para la restitución completa del capital afectado.</p>
    `
  },
  {
    id: 2,
    slug: 'prevencion-riesgos-corporativos-norte',
    title: 'Prevención de riesgos legales en empresas del norte del Perú',
    description: 'Estrategias clave para blindar contratos, cumplir normativas laborales y asegurar el patrimonio societario.',
    date: '28 JUL, 2026',
    authorId: 'sebastian-alvarado',
    category: 'Derecho Mercantil',
    image: articleEmpresa,
    content: `
      <p>Operar una empresa exitosa en Trujillo y la región norte implica gestionar no solo riesgos comerciales, sino también contingencias legales registrales, laborales y fiscales.</p>
      
      <p>Un diagnóstico preventivo permite identificar fisuras en los pactos societarios y contratos con proveedores antes de que se conviertan en pérdidas económicas irreparables.</p>
      
      <h3>1. Cláusulas Arbitrales y de Resolución Rápida</h3>
      <p>Redactar contratos comerciales con cláusulas arbitrales claras garantiza la solución de disputas en meses y no en años judiciales.</p>
      
      <h3>2. Protección de Marcas y Patentes</h3>
      <p>Resguardar el activo intangible de la empresa ante INDECOPI evita la copia o explotación no autorizada por competidores desleales.</p>
    `
  },
  {
    id: 3,
    slug: 'saneamiento-inmobiliario-trujillo',
    title: 'Claves para el saneamiento físico-legal de bienes inmuebles en La Libertad',
    description: 'Cómo sanear títulos de propiedad e independizaciones para transacciones inmobiliarias seguras.',
    date: '15 JUL, 2026',
    authorId: 'sebastian-alvarado',
    category: 'Derecho Civil',
    image: articleRegistral,
    content: `
      <p>El saneamiento inmobiliario en La Libertad exige un análisis riguroso de partidas electrónicas y antecedentes registrales ante SUNARP.</p>
      <p>Revisar cargas, gravámenes e independizaciones garantiza que la compraventa o financiamiento del predio sea 100% transparente.</p>
    `
  },
  {
    id: 4,
    slug: 'auditoria-laboral-inspecciones-sunafil',
    title: 'Auditoría laboral preventiva e inspecciones de SUNAFIL',
    description: 'Recomendaciones prácticas para mitigar riesgos de sanciones administrativas y multas laborales.',
    date: '02 JUL, 2026',
    authorId: 'alonso-solano',
    category: 'Derecho Laboral',
    image: articlePoderes,
    content: `
      <p>Cumplir con la normativa de seguridad y salud en el trabajo y la planilla electrónica evita contingencias costosas durante fiscalizaciones.</p>
    `
  },
  {
    id: 5,
    slug: 'acuerdos-accionistas-gobernanza',
    title: 'La importancia de los acuerdos de socios en startups y pymes',
    description: 'Evite disputas por el control de la empresa estableciendo reglas societarias claras.',
    date: '20 JUN, 2026',
    authorId: 'alonso-solano',
    category: 'Derecho Societario',
    image: articleSucesion,
    content: `
      <p>Los convenios entre accionistas regulan el derecho de adquisición preferente, mayorías calificadas y protocolos de salida.</p>
    `
  }
];
