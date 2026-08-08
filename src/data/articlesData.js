import articleNotario from '../assets/article-notario.png';
import articleSucesion from '../assets/article-sucesion.png';
import articleTestamento from '../assets/article-testamento.png';
import articleEmpresa from '../assets/article-empresa.png';
import articleRegistral from '../assets/article-registral.png';
import articlePoderes from '../assets/article-poderes.png';

export const articlesData = [
  {
    id: 1,
    slug: 'estrategia-defensa-penal',
    title: 'Estrategias clave para una defensa penal efectiva en investigaciones complejas',
    description: 'La etapa de investigación preliminar define el curso de todo proceso penal. Explicamos los pilares para cautelar sus derechos.',
    date: '14 MAY, 2026',
    authorId: 'carlos-olaechea',
    category: 'Derecho Penal',
    image: articleNotario,
    content: `
      <p>La citación a una investigación penal ante el Ministerio Público es un evento crítico que exige atención letrada experta desde el primer minuto. Una teoría del caso sólidamente estructurada en las primeras 48 horas puede determinar el archivamiento definitivo del caso o evitar medidas coercitivas graves.</p>
      
      <p>En el derecho procesal penal moderno, el principio de presunción de inocencia debe defenderse con evidencias documentales, peritajes técnicos y declaraciones pertinentes de alto valor probatorio.</p>
      
      <h3>1. Asistencia Letrada Inmediata</h3>
      <p>Nunca rinda una declaración ante la Policía Nacional o Fiscalía sin la presencia y recomendación previa de su abogado defensor de confianza. Las omisiones o respuestas imprecisas pueden ser interpretadas en su contra durante el proceso.</p>
      
      <h3>2. Construcción de una Teoría del Caso Inexpugnable</h3>
      <p>No basta con rechazar los cargos; es imprescindible demostrar la atipicidad del hecho o la ausencia de responsabilidad mediante medios de prueba incuestionables.</p>
      
      <h3>3. Cautela del Debido Proceso</h3>
      <p>Nuestra firma vigila estrictamente que los actos de investigación respeten las garantías constitucionales y los plazos procesales legales.</p>
      
      <p>En Estudio Jurídico Antinori D'Angelo brindamos un patrocinio penal riguroso y comprometido, habiendo obtenido el archivamiento y absolución en incontables causas judiciales en La Libertad.</p>
    `
  },
  {
    id: 2,
    slug: 'guia-divorcio-patrimonio',
    title: '¿Cómo proteger el patrimonio familiar ante un divorcio en Perú?',
    description: 'Guía legal sobre la liquidación de la sociedad de gananciales, medidas cautelares y régimen patrimonial.',
    date: '12 MAY, 2026',
    authorId: 'mariana-rios',
    category: 'Derecho de Familia',
    image: articleSucesion,
    content: `
      <p>Enfrentar un proceso de separación o divorcio implica no solo resolver aspectos afectivos, sino asegurar la protección justa del patrimonio acumulado y la manutención futura de los hijos.</p>
      
      <p>Existen dos vías principales en el sistema legal peruano: el divorcio por mutuo acuerdo (vía notarial o municipal) y el divorcio contencioso por causal ante el Poder Judicial.</p>
      
      <h3>Puntos Indispensables a Considerar</h3>
      <ul>
        <li><strong>Liquidación de la Sociedad de Gananciales:</strong> Proceso mediante el cual se inventarían y dividen por mitad los bienes adquiridos durante el matrimonio.</li>
        <li><strong>Fijación de Pensión de Alimentos:</strong> Cálculo proporcional basado en las necesidades reales del menor y la capacidad económica demostrable del obligado.</li>
        <li><strong>Régimen de Visitas y Tenencia:</strong> Acuerdos o sentencias que garantizan la relación directa entre padres e hijos.</li>
        <li><strong>Medidas Cautelares de Inmovilización:</strong> Acciones judiciales para evitar la venta maliciosa u ocultamiento de bienes de la sociedad conyugal.</li>
      </ul>
      
      <p>Nuestra especialista en Derecho de Familia orienta cada caso con estricta reserva y la firmeza legal que salvaguarda sus derechos y los de su familia.</p>
    `
  },
  {
    id: 3,
    slug: 'saneamiento-inmobiliario-conflictos',
    title: 'Prescripción adquisitiva y saneamiento de propiedades urbanas y rurales',
    description: 'Aprenda cómo inscribir formalmente la propiedad de su inmueble y solucionar problemas de titulación registral.',
    date: '08 MAY, 2026',
    authorId: 'carlos-olaechea',
    category: 'Derecho Civil',
    image: articleTestamento,
    content: `
      <p>Contar con un inmueble sin inscripción en Registros Públicos (SUNARP) genera vulnerabilidad jurídica y deprecia significativamente el valor comercial de su activo. El saneamiento inmobiliario es la solución legal idónea para regularizar títulos incompletos o superpuestos.</p>
      
      <h3>La Prescripción Adquisitiva de Dominio</h3>
      <p>Cuando una persona ha poseído un inmueble de forma continua, pacífica y pública como propietario durante 10 años (o 5 años con justo título y buena fe), la ley peruana le otorga el derecho de solicitar la propiedad formal mediante proceso notarial o judicial.</p>
      
      <h3>Beneficios del Saneamiento Inmobiliario</h3>
      <p>1. Otorga titularidad registral absoluta con valor erga omnes ante terceros.<br/>
      2. Permite acceder a créditos e hipotecas bancarias con las mejores tasas.<br/>
      3. Previene desalojos e invasiones ilegítimas de personas inescrupulosas.</p>
    `
  },
  {
    id: 4,
    slug: 'guia-blindaje-corporativo',
    title: 'Blindaje jurídico empresarial: prevención de riesgos normativos',
    description: 'Estrategias de auditoría legal preventiva (Due Diligence) y estatutos corporativos a medida para proteger a socios y accionistas.',
    date: '02 MAY, 2026',
    authorId: 'fernando-vargas',
    category: 'Corporativo',
    image: articleEmpresa,
    content: `
      <p>El éxito de una corporación moderna depende de su capacidad para anticipar y neutralizar contingencias normativas laborales, tributarias y penales antes de que escalen a sanciones o juicios millonarios.</p>
      
      <p>El blindaje jurídico corporativo abarca la confección de estatutos con cláusulas antibloqueo, acuerdos de socios de estricta confidencialidad y protocolos de gobernanza transparente.</p>
    `
  },
  {
    id: 5,
    slug: 'litigios-civiles-estrategias',
    title: 'Claves procesales para prevalecer en demandas civiles complejas',
    description: 'Análisis sobre la valoración probatoria, excepciones procesales y recursos de apelación en juicios patrimoniales.',
    date: '28 APR, 2026',
    authorId: 'mariana-rios',
    category: 'Litigios Civiles',
    image: articleRegistral,
    content: `
      <p>Un litigio civil por rescisión contractual, nulidad o indemnización por daños y perjuicios exige rigurosidad probatoria impepinable. La estrategia procesal determina la viabilidad de la demanda o la absolución en la contestación.</p>
    `
  },
  {
    id: 6,
    slug: 'derechos-laborales-defensa',
    title: 'Defensa técnica frente a despidos incausados e inspecciones SUNAFIL',
    description: 'Recomendaciones prácticas para trabajadores e instituciones ante procedimientos de fiscalización laboral.',
    date: '15 APR, 2026',
    authorId: 'fernando-vargas',
    category: 'Derecho Laboral',
    image: articlePoderes,
    content: `
      <p>La tutela constitucional del trabajo garantiza la indemnización o reposición ante un despido arbitrario. Paralelamente, las empresas deben mantener legajos laborales auditados para evitar sanciones administrativas de la SUNAFIL.</p>
    `
  }
];
