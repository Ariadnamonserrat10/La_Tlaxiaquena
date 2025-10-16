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
    summary:'Del 26 de octubre al 3 de noviembre, Oaxaca se llena de comparsas, flores y cultura para celebrar el Día de Muertos como ninguna otra región.',
    content:'Durante el Día de Muertos en Oaxaca, las calles se llenan de altares, ofrendas y comparsas. Los turistas y locales disfrutan de las tradiciones que incluyen danza, música y gastronomía típica, haciendo de esta celebración una de las más representativas de México.',
    image:'https://www.excelsior.com.mx/770x530/filters:format(webp):quality(75)/media/pictures/2025/10/08/3395066.jpg',
    date:'Oct 8, 2025',
    category:'Cultura',
  },
  {
    id: 5,
    title:'Defensa mantiene a 7 mil 300 elementos en la aplicación del Plan DN-III-E por lluvias',
    summary:'La dependencia detalló que en Veracruz se presenta el mayor despliegue operativo.',
    content:'La Secretaría de la Defensa Nacional mantiene a 7,300 elementos desplegados en diversas regiones de Veracruz debido a las fuertes lluvias. Se han instalado centros de ayuda y se realizan rescates en zonas afectadas, garantizando la seguridad de la población.',
    image:'https://www.excelsior.com.mx/770x530/filters:format(webp):quality(75)/media/pictures/2025/10/14/3398277.jpg',
    date:'Oct 14, 2025',
    category:'Nacional',
  },
  {
    id: 6,
    title:'Polonia despliega aviones mientras Ucrania sufre fuertes ataques aéreos rusos',
    summary:'Polonia envió aviones de combate a su espacio aéreo la mañana de este domingo.',
    content:'Polonia envió aviones de combate a su espacio aéreo mientras Ucrania sufría intensos ataques aéreos rusos. Las fuerzas armadas polacas incrementaron la vigilancia para proteger su soberanía y brindar apoyo humanitario en caso de ser necesario.',
    image:'https://media.cnn.com/api/v1/images/stellar/prod/rescatista.jpeg?q=w_1160,c_fill/f_webp',
    date:'Septiembre 28, 2025',
    category:'Internacional',
  },
  {
  id:7,
  title:'Temblor en Oaxaca',
  summary:'Se registra sismo de 4.3 en Matías Romero.',
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

  image:'https://www.infobae.com/resizer/v2/6FEUQO4LGRFYZGNBS7TRSM5SO4.jpg?auth=82f20c7f1645192d8e68a4f378b497ba3e1ec2f028a523ef9a6256964013ce3e&smart=true&width=992&height=558&quality=85',
  date:'Oct 14, 2025',
  category:'Estatal',
},

  {
    id:8,
    title:'Presentarán libro sobre Palmeadoras de Tlaxiaco',
    summary:'Es una investigación que hizo el maestro Tomás Ortega Ortega del colegio de posgraduados.',
    content:'El libro sobre Palmeadoras de Tlaxiaco recoge tres años de investigación del maestro Tomás Ortega Ortega, destacando la historia, técnicas y tradiciones de esta comunidad. La presentación será un evento cultural importante en la región.',
    image:'https://www.diariodelamixteca.com/wp-content/uploads/2018/06/tortillas.jpg',
    date:'Junio 8, 2018',
    category:'Municipal',
  }
];
