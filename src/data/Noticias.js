// Se exporta un arreglo de categorías llamado categorias
export const categorias = [
  // Cada objeto representa una categoría con:
  // id identificador único
  // name  nombre de la categoría
  // image  URL de la imagen que representa la categoría
  { id: 1, name: 'Política', image: 'https://i.pinimg.com/1200x/66/86/6e/66866ec8c4035dbc4411fbefc6da4136.jpg' },
  { id: 2, name: 'Deportes', image: 'https://i.pinimg.com/736x/b8/0c/36/b80c3618c938a9b7f59327099514d230.jpg' },
  { id: 3, name: 'Tecnología', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300' },
  { id: 4, name: 'Cultura', image: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=300' },
  { id: 5, name: 'Nacional', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800' },
  { id: 6, name: 'Internacional', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800' },
  { id: 7, name: 'Estatal', image: 'https://i.pinimg.com/1200x/cc/f0/92/ccf092c360a3869e7c6764059bb8b140.jpg' },
  { id: 8, name: 'Municipal', image: 'https://i.pinimg.com/1200x/16/96/0e/16960e58ee0cb22b962316083f33eae4.jpg' },
];

// Se exporta un arreglo de noticias llamado noticias
export const noticias = [
  // Cada objeto representa una noticia con:
  // id identificador único
  // title título de la noticia
  // summary resumen breve de la noticia
  // content contenido completo y detallado de la noticia
  // image URL de la imagen principal
  // date fecha de publicación
  // category categoría a la que pertenece la noticia

  {
    id: 1,
    title: 'México vence a Brasil en amistoso internacional',
    summary: 'El equipo mexicano sorprendió a Brasil con una victoria 2-1.',
    content: 'México jugó un partido espectacular contra Brasil y logró imponerse 2-1. El primer gol llegó a los 23 minutos gracias a un gran disparo de fuera del área, mientras que Brasil empató al minuto 60. Finalmente, México anotó el gol de la victoria al minuto 82 tras una jugada colectiva impresionante. El público celebró con entusiasmo la victoria.',
    image: 'https://images.unsplash.com/photo-1505842465776-3bf6de6e10ae?w=400',
    date: 'Oct 8, 2025',
    category: 'Deportes',
  },
  {
    id: 2,
    title: 'Nuevo fichaje para la Liga Nacional',
    summary: 'El Club América anuncia la incorporación de una nueva estrella.',
    content: 'El Club América firmó un nuevo jugador estrella para fortalecer su plantilla de cara a la próxima temporada. Se espera que aporte experiencia y liderazgo al equipo, y los aficionados ya muestran gran entusiasmo.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400',
    date: 'Oct 10, 2025',
    category: 'Deportes',
  },
  {
    id: 3,
    title: 'Avance en inteligencia artificial',
    summary: 'Una empresa tecnológica presenta un modelo revolucionario.',
    content: 'Una empresa tecnológica presentó su nuevo modelo de inteligencia artificial capaz de procesar información y generar soluciones en tiempo récord. Este avance promete revolucionar la industria y abrir nuevas oportunidades de desarrollo en múltiples sectores.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    date: 'Oct 9, 2025',
    category: 'Tecnología',
  },
  {
    id: 4,
    title: 'Día De Muertos en Oaxaca',
    summary: 'Del 26 de octubre al 3 de noviembre, Oaxaca se llena de comparsas, flores y cultura para celebrar el Día de Muertos como ninguna otra región.',
    content: 'Durante el Día de Muertos en Oaxaca, las calles se llenan de altares, ofrendas y comparsas. Los turistas y locales disfrutan de las tradiciones que incluyen danza, música y gastronomía típica, haciendo de esta celebración una de las más representativas de México.',
    image: 'https://www.excelsior.com.mx/770x530/filters:format(webp):quality(75)/media/pictures/2025/10/08/3395066.jpg',
    date: 'Oct 8, 2025',
    category: 'Cultura',
  },
  {
    id: 5,
    title: 'Defensa mantiene a 7 mil 300 elementos en la aplicación del Plan DN-III-E por lluvias',
    summary: 'La dependencia detalló que en Veracruz se presenta el mayor despliegue operativo.',
    content: 'La Secretaría de la Defensa Nacional mantiene a 7,300 elementos desplegados en diversas regiones de Veracruz debido a las fuertes lluvias. Se han instalado centros de ayuda y se realizan rescates en zonas afectadas, garantizando la seguridad de la población.',
    image: 'https://www.excelsior.com.mx/770x530/filters:format(webp):quality(75)/media/pictures/2025/10/14/3398277.jpg',
    date: 'Oct 14, 2025',
    category: 'Nacional',
  },
  {
    id: 6,
    title: 'Polonia despliega aviones mientras Ucrania sufre fuertes ataques aéreos rusos',
    summary: 'Polonia envió aviones de combate a su espacio aéreo la mañana de este domingo.',
    content: 'Polonia envió aviones de combate a su espacio aéreo mientras Ucrania sufría intensos ataques aéreos rusos. Las fuerzas armadas polacas incrementaron la vigilancia para proteger su soberanía y brindar apoyo humanitario en caso de ser necesario.',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/rescatista.jpeg?q=w_1160,c_fill/f_webp',
    date: 'Septiembre 28, 2025',
    category: 'Internacional',
  },
  {
    id: 7,
    title: 'Temblor en Oaxaca',
    summary: 'Se registra sismo de 4.3 en Matías Romero.',
    content: `Un sismo de magnitud 4.3 se registró en Matías Romero, Oaxaca. Las autoridades locales monitorean la situación y han emitido recomendaciones de seguridad a la población para evitar incidentes.

De acuerdo a lo que informa el Servicio Sismológico Nacional (SSN) a través de sus canales oficiales, un sismo es el rompimiento de las rocas en el interior de la Tierra, esta ruptura violenta provoca una liberación repentina de energía acumulada, que se propaga en forma de ondas sísmicas en todas las direcciones. Esta energía liberada es la que sentimos como un temblor o terremoto.

El sismo se originó a las 03:16 horas de este martes, con epicentro a 12 kilómetros al sureste de Matías Romero, Oaxaca, y a una profundidad de 5 kilómetros, según datos del SSN.

Hasta el momento, no se reportan daños materiales ni personas lesionadas a consecuencia del temblor.

Las autoridades locales y estatales han activado los protocolos de seguridad y monitorean la situación para garantizar la seguridad de los habitantes de la región.

Se recomienda a la población mantenerse informada a través de fuentes oficiales y seguir las indicaciones de las autoridades en caso de réplicas o emergencias.

Asimismo, se recuerda la importancia de contar con un plan de emergencia familiar y tener a la mano un kit de supervivencia en caso de desastres naturales.

**Información extra que quieras agregar:**  
- Recomendaciones de protección civil.  
- Consejos para resguardar objetos importantes.  
- Medidas preventivas para animales domésticos.  
- Reportes de centros de atención locales.`,

    image: 'https://www.infobae.com/resizer/v2/6FEUQO4LGRFYZGNBS7TRSM5SO4.jpg?auth=82f20c7f1645192d8e68a4f378b497ba3e1ec2f028a523ef9a6256964013ce3e&smart=true&width=992&height=558&quality=85',
    date: 'Oct 14, 2025',
    category: 'Estatal',
  },

  {
    id: 8,
    title: 'Presentarán libro sobre Palmeadoras de Tlaxiaco',
    summary: 'Es una investigación que hizo el maestro Tomás Ortega Ortega del colegio de posgraduados.',
    content: 'El libro sobre Palmeadoras de Tlaxiaco recoge tres años de investigación del maestro Tomás Ortega Ortega, destacando la historia, técnicas y tradiciones de esta comunidad. La presentación será un evento cultural importante en la región.',
    image: 'https://www.diariodelamixteca.com/wp-content/uploads/2018/06/tortillas.jpg',
    date: 'Junio 8, 2018',
    category: 'Municipal',
  },
  {
    id: 9,
    title: 'La UIF tuvo 10 denuncias contra funcionarios aduanales en el gobierno de AMLO',
    summary: 'El director general del Instituto Mexicano de la Propiedad Industrial (IMPI), Santiago Nieto dio a conocer que durante su periodo al frente de la Unidad de Investigación Financiera (UIF) le llegaron denuncias por huachicol fiscal.',
    content: `Reporteros le preguntaron si durante su gestión, en el gobierno del expresidente Andrés Manuel López Obrador, se investigaron casos de huachicol, a lo que Nieto confirmó que recibieron denuncias contra al menos 10 agentes aduanales.
“Hubo por lo menos 10 denuncias que se presentaron en ese momento que me tocó a mí, relacionados con administradores aduanales o agentes aduanales vinculados con el posible huachicol fiscal”, declaró sin ahondar en el asunto.`,
    image: 'https://politicomx-politicomx-prod.web.arc-cdn.net/resizer/v2/WAMRAUYTWZC6HPP6CMRVED6QOA.jpg?auth=0b76c9a6359b34b628befbf4ef170d4506bd7110ec9066a2e369d53866614b1c&quality=55&width=1200&height=800',
    date: 'Octubre 15,2025',
    category: 'Política',
  },
  {
    id: 10,
    title: 'Morena aumenta el costo de museos y uso de aguas nacionales para 2026',
    summary: 'Diputados aprueban alza de hasta 118% en cuotas de la Ley Federal de Derechos: suben trámites migratorios, museos y uso de agua.',
    content: 'La Cámara de Diputados aprobó en lo general las modificaciones a la Ley Federal de Derechos (LFD), una medida que eleva de forma significativa las cuotas que cobra el Estado por el uso de bienes y la prestación de servicios.En lo general: Diputados de Morena y sus aliados aprobaron la iniciativa con 355 votos a favor y 132 en contra, con el objetivo de aumentar la recaudación federal.',
    image: 'https://politicomx-politicomx-prod.web.arc-cdn.net/resizer/v2/E3EQNLJ2PVGN3CYGY6U5NTCDOQ.png?auth=eef44700769ff8dd57aa0ff193dfa072b7c0f85b00dd516d848deead8aa58672&quality=55&width=1200&height=739',
    date: 'Octubre 15,2025',
    category: 'Política',
  },
  {
    id: 11,
    title: 'Destape de candidato del Verde en Querétaro pondría en riesgo alianza con Morena',
    summary: 'El Partido Verde destapó a su diputado federal Ricardo Astudillo como un fuerte aspirante a la candidatura para el gobierno estatal',
    content: `En la 4T hay más dudas que certezas cuando se trata de las candidaturas rumbo a las elecciones 2027.
Y es que parece que a quien se la están poniendo muy difícil es a Santiago Nieto, quien según fuentes de Político MX
nada más no renuncia a su aspiración a la candidatura de Morena a la gubernatura de Querétaro.

Resulta que el Partido Verde destapó a su diputado federal Ricardo Astudillo como un fuerte aspirante a la candidatura para el gobierno estatal, lo que de manera automática pondría en riesgo la coalición cuatrotera.`,
    image: 'https://politicomx-politicomx-prod.web.arc-cdn.net/resizer/v2/F6YLSMMJ3VAFRDNCHJSJGPWSZY.jpg?auth=b336a910a5ffeedd6ce004a32f6fcfc51774216a7f5a030f7bec880aaf708777&quality=55&width=1200&height=750',
    date: 'Octubre 14,2025',
    category: 'Política',
  },
  {
    id: 12,
    title: 'Mundial Sub-20: Marruecos y Argentina disputarán final inédita',
    summary: 'Marruecos y Argentina disputarán la final del Mundial Sub-20 Chile 2025, luego de imponerse respectivamente a Francia y Colombia en la ronda previa.',
    content: `La selección sub-20 de Marruecos alargó este miércoles el momento dulce del país en el fútbol al clasificarse para la final del Mundial juvenil que transcurre en Chile tras imponerse a Francia por 5-4 en una tanda de penaltis.
Argentina se impuso a Colombia por 1-0 este miércoles en las semifinales del Mundial Sub-20 en Chile, en un partido jugado en el estadio Nacional de Santiago en el que hizo gala de su efectividad y solidez, y avanzó a la final del torneo, en la que ante Marruecos buscará el próximo domingo su séptimo título en la categoría.
Será la segunda vez en 20 años que un equipo africano juegue una final, y como en 2005, lo hará frente a Argentina. En aquella ocasión Lionel Messi marcó un doblete para derrotar a Nigeria.`,
    image: 'https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F1016%2Fr1560805_1296x729_16%2D9.jpg&w=570&format=jpg',
    date: 'Octubre 15, 2025',
    category: 'Deportes',
  },
  {
    id: 13,
    title: 'Innovación y competencia: lecciones del Nobel para el futuro económico de México',
    summary: 'En 2025, el Premio Nobel de Ciencias Económicas fue otorgado a los destacados académicos Joel Mokyr, Peter Howitt y Philippe Aghion.',
    content: `Mokyr fue reconocido por sus estudios sobre los factores históricos que permitieron el despegue tecnológico sostenido. Aghion y Howitt, por su parte, fueron distinguidos por desarrollar un modelo de crecimiento basado en la "destrucción creativa", concepto originalmente propuesto por Joseph Schumpeter.
    En su libro The Power of Creative Destruction, Aghion describe que el crecimiento sostenido se basa en un proceso continuo de innovación, que implica que nuevas empresas, productos e ideas reemplazan a los anteriores, gracias a mejoras de productividad. El “ventarrón” de la destrucción creativa, como lo definió Schumpeter.`,
    image: 'https://s.yimg.com/ny/api/res/1.2/GozHcxdhJPcUZp0FJpkALw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk7Y2Y9d2VicA--/https://media.zenfs.com/es/el_economista_434/28facf02827f0bced71d80bcfdf56c8a',
    date: 'Octubre 15,2025',
    category: 'Tecnología',
  },
  {
    id: 14,
    title: 'WhatsApp prepara uno de los mayores cambios en su historia reciente',
    summary: 'Meta busca homologar sus aplicaciones y proteger los datos de sus usuarios con este gran cambio',
    content: `¿Quieres comunicarte con una persona a través de WhatsApp, pero aún no estás listo para dar un número telefónico?
     Esta función está por llegar a WhatsApp. 
     Bien sea que se trate por seguridad, por una relación profesional o por cualquiera que sea la razón, la aplicación de mensajería permitirá comunicarse sin necesidad de compartir un número telefónico, 
    utilizando nombres de usuarios personales.
    El cambio permitirá reforzar la privacidad de los usuarios e implementar un modelo de mensajería anónima.
    Al igual que en algunas redes sociales, la aplicación permitiría crear un identificador único precedido de una arroba bajo el formato "@usuario". 
    Este formato alineará a WhatsApp con el resto de aplicaciones de Meta como Instagram o Facebook.`,
    image: 'https://www.informador.mx/__export/1760379084340/sites/elinformador/img/2025/10/13/whatsapp_actualizacixn.jpg_1998947079.jpg',
    date: 'Octubre 13,2025',
    category: 'Tecnología',
  },
  {
    id: 15,
    title: 'Un museo vivo: Experiencias y arte en el Cabañas',
    summary: 'El museo celebra el mes con exposiciones, talleres, charlas y actividades comunitarias que combinan creatividad y experiencias para todas las edades',
    content: `El Museo Cabañas celebra el mes de octubre con una programación amplia y diversa que combina arte contemporáneo, 
    patrimonio histórico, reflexión social y participación comunitaria. Bajo el lema de un museo vivo, abierto al diálogo, 
    la experimentación y la inclusión, las actividades están diseñadas para invitar a públicos de todas las edades a explorar el arte desde múltiples perspectivas,
     generando espacios de encuentro, aprendizaje y disfrute estético.`,
    image: 'https://www.informador.mx/__export/1760270524763/sites/elinformador/img/2025/10/12/orozco_crop1760270308763.jpg_1970638775.jpg',
    date: 'Octubre 12,2025',
    category: 'Cultura',
  },
  {
    id: 16,
    title: '"Lo que no quería era ser nadie": Premio Nobel de Literatura',
    summary: 'Krasznahorkai dijo sentirse "muy feliz" por el premio y "tranquilo y muy nervioso a la vez". "Es el primer día de mi vida como ganador del premio Nobel. No sé qué va a ocurrir en el futuro", afirmó.',
    content: `El escritor húngaro László Krasznahorkai, galardonado este jueves con el Nobel de Literatura 2025, confesó este jueves que su motivación inicial para dedicarse a la escritura era convertirse en alguien conocido.
    Krasznahorkai relató en conversación telefónica que años después de publicar su primera novela, sintió que no era perfecta y que quería mejorar su estilo, por lo que decidió escribir otro libro, un proceso que se fue repitiendo de forma sucesiva. "Mi vida es una corrección permanente", declaró el autor húngaro. `,
    image: 'https://www.informador.mx/__export/1760038904255/sites/elinformador/img/2025/10/09/c32d6bf5d7ba9794cc75de12fbbac8195811cfbe_version1760038902273.jpg_1292519059.jpg',
    date: 'Octubre 11,2025',
    category: 'Cultura',
  },
  {
    id: 17,
    title: 'Su “batalla cultural” en las “reformas laborales”',
    summary: 'Todas las parafernalias neoliberales tienen por fondo y forma multiplicar las ganancias burguesas bajo condiciones de explotación irrefrenables. Ya el “trabajo” ha sido sometido a una guerra semiótica violenta, prolongada, intensa y, a ratos, silenciosa. ',
    content: `El capitalismo ha comprendido que dominar los significados del tiempo, el salario y la dignidad… equivale a dominar, cínicamente, la realidad misma de los trabajadores y las trabajadoras. Su ofensiva actual –tecnológica,
    ideológica y cultural, busca aniquilar no sólo los derechos conquistados, sino la memoria de esos derechos. 
    Se trata de una “batalla cultural” burguesa también en los territorios simbólicos, 
    cuyo blanco de fuego es la conciencia colectiva hacia una “reingeniería semiótica” diseñada para borrar las huellas históricas del trabajo como fuerza creadora, 
    social y emancipadora, sustituyéndolas por la narrativa empresarial del “empleo flexible”, la “emprendeduría individual”, la “colaboración” y el “retiro voluntario”.
     En su ofensiva contra la clase trabajadora, la burguesía ha desplegado una estrategia demencial de resignificación. `,
    image: 'https://www.jornada.com.mx/ndjsimg/images/jornada/jornadaimg/su-batalla-cultural-en-las-reformas-laborales/su-batalla-cultural-en-las-reformas-laborales_8c420e88-4d92-4a41-b83b-1d1298f343a7_medialjnimgndimage=fullsize',
    date: 'Octubre 16,2025',
    category: 'Nacional',
  },
  {
    id: 18,
    title: 'Atacan con drones unidad antisecuestros de Fiscalía de Baja California',
    summary: 'Mexicali, BC. Las oficinas de la Unidad Antisecuestros de la Fiscalía General de Baja California fue atacada con explosivos durante la noche de miércoles, confirmaron fuentes consultadas. ',
    content: `El ataque se produjo mediante drones que sobrevolaron por el inmueble ubicado en Playas de Tijuana.
    Los explosivos no dejaron agentes ministeriales heridos ni personal administrativo. 
Hace un mes, en septiembre se produjeron ataques contra dos oficinas de la FGBC en el puerto de Ensenada y otra de Tijuana con saldos de cinco patrullas quemadas con artefactos explosivos.`,
    image: 'https://www.jornada.com.mx/ndjsimg/images/jornada/jornadaimg/atacan-con-drones-a-fiscalia-de-baja-california/atacan-con-drones-a-fiscalia-de-baja-california_99980bc6-ea61-488f-9c96-34e9c50a3d65_medialjnimgndimage=fullsize',
    date: 'Octubre 15,2025',
    category: 'Nacional',
  },
  {
    id: 19,
    title: 'Kapital Grupo Financiero planea una oferta dual en mercados',
    summary: 'En unos años, Kapital Grupo Financiero podrá hacer una oferta dual en los mercados mexicanos y estadunidenses, reveló Alejandra Marcos, directora de análisis y estrategia en Kapital Grupo Financiero.',
    content: `Kapital se integró como un Grupo Financiero en México tras la adquisición de la Casa de Bolsa y la Operadora de Fondos de Intercam, un movimiento que fue autorizado por la Comisión Nacional Bancaria y de Valores (CNBV) el 29 de agosto del presente año.
    Intercam, institución que fue acusada por el gobierno estadunidense de facilitar lavado de dinero para organizaciones criminales a finales de junio pasado junto con CIBanco y Vector, operaba como Grupo Financiero desde 1996. Hasta ahora las autoridades de aquel país no han presentado las pruebas, según ha expresado en varias ocasiones el gobierno mexicano.
    Alejandra Marcos explicó que Kapital adquirió ciertos activos de Intercam Grupo Financiero, pues René Saúl, director general del Grupo, acabó por levantar capital por 86 millones de dólares, que originó que un valuador independiente de fondos de capital privado ya arrojara una valuación por más de mil 350 millones de dólares.
    Aseguró que este banco (Kapital) va a revolucionar la industria, pues tiene un brazo muy potente en términos tecnológicos, de ahí que necesitará más capital para su crecimiento.`,
    image: 'https://www.jornada.com.mx/ndjsimg/images/jornada/jornadaimg/kapital-grupo-financiero-planea-una-oferta-dual-en-mercados/kapital-grupo-financiero-planea-una-oferta-dual-en-mercados_cd2ae893-24da-483f-9cdf-d9d78cbe26c7_medialjnimgndimage=fullsize',
    date: 'Octubre 15,2025',
    category: 'Internacional',
  },
  {
    id: 20,
    title: 'El informe sobre la implosión del "Titán" apunta a "un proceso inadecuado de ingeniería" como causa',
    summary: 'Afirma que OceanGate no determinó con éxito "la fuerza y durabilidad" del sumergible, que habría sufrido daños en inmersiones previas',
    content: `Afirma que OceanGate no determinó con éxito "la fuerza y durabilidad" del sumergible, que habría sufrido daños en inmersiones previas
    El informe sobre la implosión del 'Titán' apunta a "un proceso inadecuado de ingeniería" como causa
La implosión sufrida por el sumergible 'Titán' de la empresa OceanGate 
durante una inmersión con turistas para visitar los restos del Titanic fue causada por "un proceso inadecuado de ingeniería" por parte de la compañía,
 que derivó en el fallo catastrófico registrado en junio de 2023,
  que se saldó con la muerte de los cinco ocupantes del batiscafo, según las conclusiones de la Junta Nacional de Seguridad en el Transporte (NTSB,
  según sus siglas en inglés).`,
    image: 'https://tse4.mm.bing.net/th/id/OIP.k9pKyN02o3jNFZf6BeQ_3gHaFE?pid=Api&P=0&h=180',
    date: 'Octubre 16,2025',
    category: 'Internacional',
  },
  {
    id: 21,
    title: 'Maestros de educación indígena-SNTE inician paro laboral en Oaxaca',
    summary: 'Maestros del nivel de Educación Indígena de la Sección 22 del Sindicato Nacional de Trabajadores de la Educación (SNTE) iniciaron un paro de labores de 48 horas para exigir la atención a las necesidades de este sector y el reconocimiento de la Dirección de Pueblos Originarios en el Instituto Estatal de Educación Pública de Oaxaca (IEEPO).',
    content: `Los docentes, además, se instalaron en plantón en el zócalo de la capital del estado y tienen programada una marcha del monumento a Benito Juárez, ubicado en el cruce vial de San Andrés Huayapam, hacia el centro de la ciudad.
    El titular de Trabajos y Conflictos del nivel de Educación Indígena de la Sección 22 del SNTE, Rodrigo Sánchez Joaquín, informó que una de sus principales demandas es resolver la asignación o contratación de personal para más de mil 500 personas con las que se cubrirían los espacios necesarios para el funcionamiento de este nivel.`,
    image: 'https://s.yimg.com/ny/api/res/1.2/FZrb7Guj.bW9Ffi_6Q3C5w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIyMDA7aD0xMzMyO2NmPXdlYnA-/https://media.zenfs.com/es/eluniversal.com.mx/bd53dd987a3e6c9d6e093d61c7a98b96',
    date: 'Octubre 13,2025',
    category: 'Estatal',
  },
  {
    id: 22,
    title: 'Especialistas del USDA evaluarán acciones contra el gusano barrenador del ganado en Oaxaca',
    summary: 'Expertos del Departamento de Agricultura de Estados Unidos (USDA) visitarán Oaxaca para revisar los avances en la erradicación del gusano barrenador.',
    content: `Especialistas del Departamento de Agricultura de Estados Unidos (USDA, por sus siglas en inglés) visitarán Oaxaca del 21 al 25 de octubre para revisar los trabajos de combate y erradicación del gusano barrenador del ganado, informó el secretario de Fomento Agroalimentario y Desarrollo Rural del Estado (Sefader), Víctor López Leyva.
    En declaraciones a la prensa, precisó que el equipo del USDA y del Servicio Nacional de Sanidad, Inocuidad y Calidad Agroalimentaria (Senasica) estará en diversas municipalidades de la región del Istmo de Tehuantepec, así como en puntos de comercio de ganado en pie (baratillos) ubicados en municipios conurbados de la capital oaxaqueña.`,
    image: 'https://www.excelsior.com.mx/770x530/filters:format(webp):quality(75)/media/pictures/2025/10/14/3399000.jpg',
    date: 'Octubre 14,2025',
    category: 'Estatal',
  },
  {
    id: 23,
    title: 'Presa El Boquerón: paisaje oculto con vistas impresionantes a sólo 20 minutos de Tlaxiaco, Oaxaca',
    summary: 'Vive una experiencia única en la presa El Boquerón, donde podrás disfrutar de caminatas, pesca, cabañas, vistas panorámicas y comida típica de la región',
    content: `En el corazón de la región Mixteca de Oaxaca se encuentra un verdadero paraíso natural que espera ser descubierto por quienes buscan una escapatoria del bullicio de la vida cotidiana.
    A sólo 20 minutos de la Heroica Ciudad de Tlaxiaco, la presa El Boquerón ofrece un rincón de serenidad, rodeado por un paisaje espectacular de montañas y bosques que la convierten en un destino ideal para el turismo de aventura, relajación y fotografía.`,
    image: 'https://i.ytimg.com/vi/uTrnTojj6H8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEUgVChlMA8=&rs=AOn4CLD0_Qa_xinbKKhYi4VbK12v7xwBQA',
    date: 'Octubre 9,2025',
    category: 'Municipal',
  },
  {
    id: 24,
    title: 'Gran Fiesta Titular Tlaxiaco 2025',
    summary: 'La Gran Fiesta Titular Tlaxiaco 2025 promete superar expectativas, reafirmando su lugar como una de las celebraciones más emblemáticas de la Mixteca oaxaqueña.',
    content: `La Gran Fiesta Titular Tlaxiaco 2025 se prepara para llenar de alegría, tradición y color a la Heroica Ciudad de Tlaxiaco, Oaxaca, del 13 al 17 de octubre. Esta celebración, una de las más esperadas en la región Mixteca, reúne lo mejor de la cultura, la fe y la identidad de su gente, convirtiéndose en un punto de encuentro para locales, visitantes y paisanos que regresan desde distintas partes del país y del extranjero para disfrutar de su fiesta más grande.,
    La festividad se realiza en honor al Señor de los Corazones, patrono de Tlaxiaco, cuya imagen es venerada con gran devoción. Durante los días de fiesta se llevan a cabo solemnes misas, procesiones y actividades religiosas que reflejan el profundo sentimiento espiritual de la comunidad. Las calles se llenan de coloridos tapetes, flores, cohetes y música, mientras los fieles acompañan al santo patrono en recorridos llenos de fe y gratitud.`,
    image: 'https://i.ytimg.com/vi/LRmIJgXTwo0/maxresdefault.jpg',
    date: 'Octubre 5,2025',
    category: 'Municipal',
  }
];
