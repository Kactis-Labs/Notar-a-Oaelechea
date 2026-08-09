import articleNotario from '../assets/article-notario.png';
import articleSucesion from '../assets/article-sucesion.png';
import articleTestamento from '../assets/article-testamento.png';
import articleEmpresa from '../assets/article-empresa.png';
import articleRegistral from '../assets/article-registral.png';
import articlePoderes from '../assets/article-poderes.png';

export const articlesData = [
  {
    id: 1,
    slug: 'prevencion-riesgos-penales-empresarial',
    title: 'Prevención de riesgos penales en la gestión corporativa',
    description: 'La importancia de contar con modelos de prevención y compliance penal para proteger a directores y gerentes.',
    date: '14 MAY, 2026',
    authorId: 'carlos-perez',
    category: 'Derecho Penal Empresarial',
    image: articleNotario,
    content: `
      <p>En el entorno comercial actual, las decisiones gerenciales conllevan responsabilidades legales complejas. La legislación peruana atribuye responsabilidad penal administrativa a las empresas por delitos cometidos en su beneficio.</p>
      
      <p>Contar con un sistema de Compliance Penal no solo exime de responsabilidad a la persona jurídica, sino que protege la libertad y el buen nombre de sus administradores.</p>
      
      <h3>1. Diagnóstico de Riesgos Operacionales</h3>
      <p>Identificar las áreas sensibles (contratación pública, tributación, licencias y finanzas) permite establecer controles internos efectivos.</p>
      
      <h3>2. Políticas y Protocolos Claros</h3>
      <p>Establecer manuales de conducta y canales éticos de denuncia fortalece la cultura corporativa de integridad.</p>
    `
  },
  {
    slug: 'auditoria-laboral-preventiva-sunafil',
    id: 2,
    title: 'Auditorías laborales preventivas ante inspecciones SUNAFIL',
    description: 'Claves para mantener al día el registro sociolaboral de su empresa y evitar sanciones económicas gravísimas.',
    date: '12 MAY, 2026',
    authorId: 'mariana-vasquez',
    category: 'Derecho Laboral',
    image: articleSucesion,
    content: `
      <p>Las inspecciones de la SUNAFIL se han intensificado en la región. Una auditoría preventiva interna permite corregir inconsistencias en planillas, contratos a modalidad y normas de seguridad e higiene antes de cualquier requerimiento oficial.</p>
    `
  },
  {
    slug: 'saneamiento-patrimonial-inmobiliario',
    id: 3,
    title: 'Saneamiento físico-legal de bienes inmuebles corporativos',
    description: 'Pasos fundamentales para formalizar la propiedad inmobiliaria y otorgarle valor comercial pleno en SUNARP.',
    date: '08 MAY, 2026',
    authorId: 'carlos-perez',
    category: 'Derecho Civil',
    image: articleTestamento,
    content: `
      <p>Contar con inmuebles debidamente saneados facilita la obtención de financiamientos bancarios y garantiza transacciones de compraventa seguras sin observaciones registrales.</p>
    `
  },
  {
    slug: 'reestructuracion-societaria-estatutos',
    id: 4,
    title: 'Reestructuración societaria y actualización de estatutos',
    description: 'Cómo adaptar la estructura legal de su sociedad ante nuevas metas de crecimiento o ingreso de inversionistas.',
    date: '02 MAY, 2026',
    authorId: 'carlos-perez',
    category: 'Derecho Corporativo',
    image: articleEmpresa,
    content: `
      <p>Los estatutos aprobados en el nacimiento del negocio deben evolucionar con la empresa. Los pactos de accionistas regulan la entrada y salida de socios manteniendo el control societario.</p>
    `
  },
  {
    slug: 'arbitraje-contratacion-publica',
    id: 5,
    title: 'Solución de controversias en contratos con el Estado',
    description: 'Herramientas de conciliación y arbitraje para resolver discrepancias durante la ejecución de obras y servicios públicos.',
    date: '28 APR, 2026',
    authorId: 'mariana-vasquez',
    category: 'Contratación Pública',
    image: articleRegistral,
    content: `
      <p>El arbitraje constituye la vía idónea para reclamar adicionales de obra, ampliaciones de plazo o la devolución de penalidades aplicadas indebidamente por entidades estatales.</p>
    `
  },
  {
    slug: 'planificacion-sucesoria-familiar',
    id: 6,
    title: 'Planificación sucesoria para la protección del patrimonio familiar',
    description: 'Instrumentos legales para transferir ordenada y pacíficamente la propiedad de bienes a las siguientes generaciones.',
    date: '15 APR, 2026',
    authorId: 'carlos-perez',
    category: 'Patrimonial',
    image: articlePoderes,
    content: `
      <p>Los anticipos de legítima con reserva de usufructo vitalicio y los testamentos notariales previenen disputas familiares y otorgan plena seguridad al propietario.</p>
    `
  }
];
