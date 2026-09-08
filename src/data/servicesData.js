import imgEscrituras from '../assets/escrituras.jpg';
import imgEmpresas from '../assets/empresas.jpg';
import imgLegalizacion from '../assets/legalizacion.jpg';
import imgSucesion from '../assets/sucesion.jpg';
import imgTestamentosNuevo from '../assets/testamentos.png';

export const servicesData = [
  {
    slug: 'derecho-civil',
    title: 'Derecho Civil y Patrimonial',
    shortDesc: 'Asesoría y patrocinio en contratos, derechos reales, prescripción adquisitiva, desalojos, sucesiones y responsabilidad civil.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop',
    heroImg: imgEscrituras,
    tiempoEstimado: 'Evaluación y estrategia en 24-48 horas',
    teamMemberId: 'carlos-quispe',
    detailedDesc: [
      'El Derecho Civil constituye la columna vertebral de las relaciones patrimoniales y familiares. En Quispe Villanueva & Abogados Asociados brindamos patrocinio riguroso en litigios civiles y negociaciones extrajudiciales complejas.',
      'Defendemos su patrimonio frente a pretensiones indebidas, formalizamos títulos de propiedad a través de prescripciones adquisitivas de dominio, acciones reivindicatorias y procesos de desalojo con medidas cautelares efectivas.',
      'Asimismo, estructuramos contratos de compraventa, arrendamiento, hipotecas y garantías con cláusulas blindadas que previenen futuros litigios.'
    ],
    whoItAppliesTo: 'Personas naturales, familias y propietarios que requieren proteger sus bienes raíces, resolver controversias contractuales o tramitar herencias y divisiones patrimoniales.',
    whatProblemItSolves: 'Evita la pérdida de inmuebles, desentraba disputas familiares y asegura el cumplimiento de obligaciones contractuales mediante patrocinio judicial estratégico.',
    requirements: [
      'Documento Nacional de Identidad (DNI) o Carné de Extranjería de las partes.',
      'Contratos, minutas o escrituras públicas materia de consulta.',
      'Partida registral del predio o bien en controversia (Copia Literal SUNARP).',
      'Cartas notariales o comunicaciones previas cursadas.',
      'Copia de resoluciones judiciales o acuerdos de conciliación previos (si existieran).'
    ]
  },
  {
    slug: 'derecho-comercial',
    title: 'Derecho Comercial y Corporativo',
    shortDesc: 'Constitución societaria, gobierno corporativo, contratos mercantiles, títulos valores y cobranza judicial ejecutiva.',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
    heroImg: imgEmpresas,
    tiempoEstimado: 'Atención corporativa continua y célere',
    teamMemberId: 'elena-villanueva',
    detailedDesc: [
      'Asesoramos a empresas nacionales e internacionales en todas las etapas de su ciclo de vida corporativo: desde la constitución de sociedades, aumentos de capital y fusiones, hasta la redacción de estatutos y acuerdos de accionistas.',
      'Representamos a nuestros clientes corporativos en la recuperación judicial y extrajudicial de deudas mediante procesos ejecutivos de pagarés, letras de cambio y facturas negociables.',
      'Nuestro enfoque combina rigor procesal y visión comercial para asegurar que cada decisión jurídica maximice la rentabilidad y minimice la exposición a contingencias legales.'
    ],
    whoItAppliesTo: 'Empresas, PYMEs, directores, inversionistas y emprendedores que requieran blindaje societario y gestión de cobranzas de alto impacto.',
    whatProblemItSolves: 'Previene conflictos entre socios, reduce pérdidas financieras por cuentas incobrables y asegura el cumplimiento normativo mercantil y registral.',
    requirements: [
      'Ficha RUC y copia literal de la partida registral de la empresa.',
      'Vigencia de poder del representante legal.',
      'Títulos valores originales (pagarés, facturas, letras de cambio) debidamente protestados o con cláusula de no protesto.',
      'Contratos comerciales y estados de cuenta vinculados a la controversia.'
    ]
  },
  {
    slug: 'derecho-administrativo',
    title: 'Derecho Administrativo y Regulatorio',
    shortDesc: 'Defensa técnica ante entidades del Estado (SUNAT, INDECOPI, SUTRAN, Municipalidades) y procesos contencioso-administrativos.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
    heroImg: imgLegalizacion,
    tiempoEstimado: 'Plazos conforme a la Ley del Procedimiento Administrativo General (LPAG)',
    teamMemberId: 'elena-villanueva',
    detailedDesc: [
      'El ejercicio de la función pública debe sujetarse estrictamente al principio de legalidad y al debido procedimiento. Nuestro equipo patrocina a ciudadanos y empresas frente a actos arbitrarios o desproporcionados de la administración pública.',
      'Formulamos descargos en Procedimientos Administrativos Sancionadores (PAS), interponemos recursos de reconsideración y apelación, y agotamos la vía administrativa con argumentos técnicos de alto peso.',
      'En sede judicial, interponemos demandas contencioso-administrativas y medidas cautelares para suspender la ejecución de resoluciones administrativas lesivas a sus derechos.'
    ],
    whoItAppliesTo: 'Empresas y administrados objeto de fiscalización, sanciones, multas o clausuras por parte de organismos reguladores, ministerios y municipalidades.',
    whatProblemItSolves: 'Anula sanciones ilegales, evita embargos coactivos indebidos y reestablece licencias o autorizaciones comerciales legítimas.',
    requirements: [
      'Resolución de inicio de procedimiento sancionador o notificación de cargo.',
      'Copia de descargos y pruebas ofrecidas en la etapa previa.',
      'Resolución administrativa que se impugna o constancia de silencio administrativo.',
      'Ficha RUC o DNI del administrado recurrente.'
    ]
  },
  {
    slug: 'derecho-arbitral',
    title: 'Derecho Arbitral y Controversias',
    shortDesc: 'Asesoría y patrocinio en arbitrajes comerciales, contrataciones del Estado (OSCE) y solución de litigios complejos.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop',
    heroImg: imgSucesion,
    tiempoEstimado: 'Estrategia arbitral personalizada y expedita',
    teamMemberId: 'carlos-quispe',
    detailedDesc: [
      'El arbitraje es el mecanismo idóneo y confidencial para la solución rápida y especializada de controversias patrimoniales y comerciales. En Quispe Villanueva & Abogados contamos con vasta experiencia ante los principales centros arbitrales del país (CCL, PUCP, AMCHAM, OSCE).',
      'Elaboramos demandas arbitrales, contestaciones, reconvenciones y solicitudes de medidas cautelares arbitrales, asegurando la designación estratégica de árbitros idóneos y la debida actuación probatoria.',
      'Asimismo, patrocinamos recursos de anulación de laudos arbitrales ante las Salas Comerciales del Poder Judicial cuando se han vulnerado garantías del debido proceso arbitral.'
    ],
    whoItAppliesTo: 'Contratistas con el Estado, consorcios de infraestructura, empresas comerciales y partes de contratos con convenio arbitral pactado.',
    whatProblemItSolves: 'Resuelve disputas de alta cuantía con mayor celeridad y especialización que la justicia ordinaria, protegiendo penalidades y valorizaciones de obra.',
    requirements: [
      'Contrato original con convenio o cláusula arbitral.',
      'Comunicaciones, cartas notariales y actas de trato directo previas.',
      'Documentación técnica o financiera sustentatoria de la controversia.',
      'Laudo o resoluciones arbitrales previas (en caso de anulación).'
    ]
  },
  {
    slug: 'derecho-penal',
    title: 'Derecho Penal y Delitos Económicos',
    shortDesc: 'Litigación penal estratégica, defensa técnica en investigación preliminar, preparatoria, juicio oral y delitos patrimoniales.',
    img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=600&auto=format&fit=crop',
    heroImg: imgTestamentosNuevo,
    tiempoEstimado: 'Atención de emergencias penales 24/7',
    teamMemberId: 'carlos-quispe',
    detailedDesc: [
      'La defensa de la libertad y el honor requiere la más alta solvencia técnica y temple procesal. Nuestro estudio ejerce la defensa técnica penal bajo el Código Procesal Penal peruano con una visión proactiva y probatoria contundente.',
      'Especialistas en Derecho Penal Económico y de la Empresa (Compliance penal, estafas, apropiación ilícita, fraude en la administración de personas jurídicas, delitos tributarios y aduaneros).',
      'Acompañamos al patrocinado en diligencias fiscales, declaraciones indagatorias, audiencias de prisión preventiva, control de acusación y juzgamiento oral con técnicas avanzadas de interrogatorio y argumentación.'
    ],
    whoItAppliesTo: 'Directivos, profesionales y personas naturales investigadas o agraviadas en sede policial, fiscal y judicial por imputaciones de índole penal.',
    whatProblemItSolves: 'Evita medidas coercitivas restrictivas de la libertad (prisión preventiva, impedimento de salida), logra archivamientos liminares y sobreseimientos justos.',
    requirements: [
      'Disposición fiscal de inicio de diligencias preliminares o formalización de investigación.',
      'Carpeta fiscal o expediente judicial (número y fiscalía/juzgado a cargo).',
      'Documentos y elementos de convicción de descargo.',
      'DNI del patrocinado y designación formal de defensa técnica.'
    ]
  }
];
