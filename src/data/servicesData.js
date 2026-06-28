import imgEscrituras from '../assets/escrituras.jpg';
import imgTestamentosNuevo from '../assets/testamentos.png';
import imgVehiculos from '../assets/vehiculos.jpg';
import imgSucesion from '../assets/sucesion.jpg';
import imgLegalizacion from '../assets/legalizacion.jpg';
import imgEmpresas from '../assets/empresas.jpg';

export const servicesData = [
  {
    slug: 'escrituras-publicas',
    title: 'Escrituras Públicas',
    shortDesc: 'Formalización de compraventas, anticipos de legítima y donaciones con total seguridad jurídica.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop',
    heroImg: imgEscrituras,
    tiempoEstimado: '3-5 días hábiles',
    teamMemberId: 'carlos-olaechea',
    detailedDesc: [
      'Una Escritura Pública es un instrumento público protocolar redactado por el notario, que contiene uno o más actos jurídicos, brindando la máxima seguridad jurídica, fecha cierta y valor probatorio pleno ante cualquier institución.',
      'A través de este documento formal, garantizamos que las partes expresen su voluntad de manera libre y consciente, verificando la legalidad del acto y la identidad de los otorgantes. Es el paso fundamental para inscribir derechos en los Registros Públicos (SUNARP).',
      'Nuestro equipo se encarga de todo el proceso, desde la redacción de la minuta (si no cuenta con una) hasta la emisión de los partes notariales correspondientes.'
    ],
    whoItAppliesTo: 'Personas naturales o jurídicas que deseen formalizar actos como compraventa de inmuebles, donaciones, anticipos de legítima, hipotecas, entre otros.',
    whatProblemItSolves: 'Evita futuros conflictos legales o nulidades al otorgar validez absoluta e incuestionable a los acuerdos voluntarios, garantizando su posterior inscripción registral.',
    requirements: [
      'Documento de Identidad (DNI, CE o Pasaporte) vigente de los otorgantes.',
      'Minuta autorizada por abogado colegiado.',
      'En caso de inmuebles: HR (Hoja Resumen), PU (Predio Urbano) y recibo de pago del Impuesto Predial del año en curso.',
      'Copia literal o partida electrónica del bien (antigüedad no mayor a 30 días).',
      'Comprobantes de pago (bancarización) e impuesto de alcabala (si aplica).'
    ]
  },
  {
    slug: 'testamentos',
    title: 'Testamentos',
    shortDesc: 'Asesoría especializada para dejar su voluntad plasmada y proteger el futuro de su familia.',
    img: imgTestamentosNuevo,
    heroImg: imgTestamentosNuevo,
    tiempoEstimado: '1-2 días hábiles',
    teamMemberId: 'carlos-olaechea',
    detailedDesc: [
      'El testamento por escritura pública es el acto mediante el cual una persona dispone de sus bienes para después de su muerte, de forma ordenada y conforme a ley, ante notario y en presencia de dos testigos.',
      'La ventaja principal del testamento notarial es su inmediatez y seguridad. A diferencia del testamento ológrafo o cerrado, este no requiere de complejos procesos judiciales de apertura y comprobación post-mortem; tiene validez inmediata tras el fallecimiento.',
      'Nuestra notaría le brinda asesoría personalizada para asegurar que sus disposiciones respeten las cuotas de legítima correspondientes a sus herederos forzosos, evitando que el testamento sea impugnado en el futuro.'
    ],
    whoItAppliesTo: 'Toda persona mayor de edad y en pleno uso de sus facultades que desee planificar la distribución de su patrimonio.',
    whatProblemItSolves: 'Previene disputas familiares, procesos judiciales largos y costosos (sucesión intestada) y asegura que su patrimonio se asigne según sus deseos, dentro del marco legal.',
    requirements: [
      'DNI vigente del testador.',
      'DNI vigente de 2 testigos (no pueden ser familiares ni herederos o legatarios).',
      'Certificado Médico de salud mental (obligatorio si el testador es mayor de 70 años).',
      'Relación detallada de los bienes (opcional, pero recomendada) y de los herederos.'
    ]
  },
  {
    slug: 'transferencia-vehicular',
    title: 'Transferencia Vehicular',
    shortDesc: 'Legalización y formalización rápida y segura para la compra y venta de vehículos.',
    img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop',
    heroImg: imgVehiculos,
    tiempoEstimado: '1 día hábil',
    teamMemberId: 'elena-torres',
    detailedDesc: [
      'El Acta Notarial de Transferencia Vehicular es el documento legal mediante el cual se formaliza el cambio de propietario de un vehículo automotor usado (autos, motos, camiones, etc.).',
      'Al realizar este trámite notarial, se verifica en tiempo real la identidad de los contratantes mediante biometría dactilar (RENIEC), así como el estado actual del vehículo en SUNARP, descartando bloqueos, embargos o robos.',
      'El proceso concluye con el bloqueo registral electrónico a favor del comprador y la presentación de los partes notariales a Registros Públicos, asegurando que la compra sea 100% segura.'
    ],
    whoItAppliesTo: 'Compradores y vendedores de vehículos automotores usados que requieran seguridad jurídica y celeridad en el trámite.',
    whatProblemItSolves: 'Protege al vendedor de responsabilidad civil o penal por infracciones futuras y protege al comprador de estafas, cargas o gravámenes ocultos del vehículo.',
    requirements: [
      'DNI vigente de comprador y vendedor (y cónyuges, si aplica).',
      'Tarjeta de Identificación Vehicular (TIV) original.',
      'SOAT vigente.',
      'Comprobante de pago del Impuesto al Patrimonio Vehicular (si el vehículo tiene antigüedad de hasta 3 años).',
      'Medio de pago bancarizado por el valor del vehículo.'
    ]
  },
  {
    slug: 'sucesion-intestada',
    title: 'Sucesión Intestada',
    shortDesc: 'Declaratoria de herederos rápida y eficiente cuando no existe un testamento previo.',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop',
    heroImg: imgSucesion,
    tiempoEstimado: '25-30 días hábiles',
    teamMemberId: 'fernando-vargas',
    detailedDesc: [
      'La Sucesión Intestada o Declaratoria de Herederos es el procedimiento notarial que se realiza cuando una persona fallece sin dejar testamento, o si el testamento otorgado ha sido declarado nulo o caduco.',
      'El objetivo principal de este trámite es determinar legalmente quiénes son los herederos forzosos (cónyuge, hijos, o padres en su defecto) que tienen derecho a heredar el patrimonio del causante.',
      'A diferencia del proceso judicial, la vía notarial es significativamente más rápida. Nosotros nos encargamos de todo el procedimiento, incluyendo las anotaciones preventivas en SUNARP y las publicaciones requeridas en el Diario Oficial El Peruano.'
    ],
    whoItAppliesTo: 'Familiares directos (cónyuge, hijos, padres, hermanos) de una persona fallecida que no dejó testamento.',
    whatProblemItSolves: 'Permite el desbloqueo de cuentas bancarias y el traslado formal del dominio de inmuebles y vehículos a nombre de los herederos legítimos.',
    requirements: [
      'DNI vigente del solicitante.',
      'Partida de Defunción del causante.',
      'Partida de Matrimonio (si aplica).',
      'Partidas de Nacimiento de todos los presuntos herederos.',
      'Certificado Negativo de Sucesión Intestada (SUNARP).',
      'Certificado Negativo de Testamento (SUNARP).'
    ]
  },
  {
    slug: 'legalizacion-documentos',
    title: 'Legalización de Documentos',
    shortDesc: 'Certificación de firmas y reproducciones documentales para dar fe de su autenticidad.',
    img: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=600&auto=format&fit=crop',
    heroImg: imgLegalizacion,
    tiempoEstimado: 'Inmediato (Mismo día)',
    teamMemberId: 'mariana-rios',
    detailedDesc: [
      'La legalización notarial es un acto a través del cual el notario da fe de que la firma o huella digital que aparece en un documento privado pertenece efectivamente a la persona que la ha puesto en su presencia.',
      'Asimismo, la legalización de copias certifica que la reproducción es idéntica al documento original presentado. Esto aplica para diplomas, certificados, DNI, pasaportes, libros contables, actas societarias, entre otros.',
      'Contamos con un equipo de atención rápida que verifica la identidad biométrica y procesa sus documentos en cuestión de minutos, garantizando que tengan pleno valor frente a cualquier entidad pública o privada.'
    ],
    whoItAppliesTo: 'Personas o empresas que requieran presentar contratos privados, autorizaciones, poderes simples o copias fieles ante instituciones gubernamentales, bancos o terceros.',
    whatProblemItSolves: 'Otorga presunción legal de veracidad a un documento privado o a una copia, evitando que su contenido o las firmas sean rechazadas por falta de formalidad.',
    requirements: [
      'Para legalización de firmas: Presencia física del firmante con DNI vigente.',
      'Para legalización de copias: Presentación del documento ORIGINAL y de la copia a certificar.',
      'En caso de libros societarios o contables: El libro anterior (si es a partir del N° 2) y el documento de constitución de la empresa.',
      'Autorizaciones de viaje para menores: Presencia de uno o ambos padres (según destino) con DNI y partida de nacimiento original del menor.'
    ]
  },
  {
    slug: 'constitucion-empresas',
    title: 'Constitución de Empresas',
    shortDesc: 'Creación de sociedades, EIRL y otras formas societarias para iniciar su negocio con el pie derecho.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop',
    heroImg: imgEmpresas,
    tiempoEstimado: '5-7 días hábiles',
    teamMemberId: 'elena-torres',
    detailedDesc: [
      'La constitución de una empresa es el acto formal por el cual una o varias personas deciden formar una persona jurídica (E.I.R.L., S.A.C., S.R.L., entre otras) para desarrollar una actividad económica.',
      'Nuestro servicio integral abarca desde la reserva de nombre, la elaboración del pacto social y los estatutos (minuta), hasta la elevación a Escritura Pública y su posterior inscripción en los Registros Públicos.',
      'Le brindamos asesoramiento societario para definir qué tipo de sociedad se ajusta mejor a su modelo de negocio, régimen de capital y responsabilidades, garantizando un inicio corporativo sólido y sin contratiempos.'
    ],
    whoItAppliesTo: 'Emprendedores, empresarios, startups y grupos de inversionistas que desean formalizar sus negocios y separar su patrimonio personal del patrimonio del negocio.',
    whatProblemItSolves: 'Proporciona responsabilidad limitada (el patrimonio personal no se ve afectado por las deudas del negocio), permite acceder a créditos financieros formales y facturar formalmente.',
    requirements: [
      'DNI vigente de los socios (y cónyuges, si corresponde).',
      'Reserva de Nombre expedida por SUNARP (podemos tramitarla por usted).',
      'Descripción detallada del objeto social (actividades del negocio).',
      'Acreditación del capital social (depósito en cuenta bancaria o declaración jurada de bienes si son aportes no dinerarios).',
      'Declaración de nombramiento del Gerente General y Directorio (si aplica).'
    ]
  }
];
