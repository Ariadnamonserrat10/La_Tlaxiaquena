// Se exporta una constante llamada 'categorias', que es un arreglo.
// Cada objeto representa una categoría de noticias con un id, un nombre y una imagen.
export const categorias = [
  { 
    id: 1, // Identificador único de la categoría
    name: 'Política', // Nombre de la categoría
    image: 'https://i.pinimg.com/1200x/66/86/6e/66866ec8c4035dbc4411fbefc6da4136.jpg' // URL de la imagen representativa
  },
  { 
    id: 2, 
    name: 'Deportes', 
    image: 'https://i.pinimg.com/736x/b8/0c/36/b80c3618c938a9b7f59327099514d230.jpg' 
  },
  { 
    id: 3, 
    name: 'Tecnología', 
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300' 
  },
  { 
    id: 4, 
    name: 'Cultura', 
    image: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=300' 
  },
  { 
    id: 5, 
    name: 'Nacional', 
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800' 
  },
  { 
    id: 6, 
    name: 'Internacional', 
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800' 
  },
  { 
    id: 7, 
    name: 'Estatal', 
    image: 'https://i.pinimg.com/1200x/cc/f0/92/ccf092c360a3869e7c6764059bb8b140.jpg' 
  },
  { 
    id: 8, 
    name: 'Municipal', 
    image: 'https://i.pinimg.com/1200x/16/96/0e/16960e58ee0cb22b962316083f33eae4.jpg' 
  },


];

// Ahora se exporta otra constante llamada 'noticias', que también es un arreglo.
// Cada objeto representa una noticia individual con su información correspondiente.
export const noticias = [
  {
    id: 1, // Identificador único de la noticia
    title: 'México vence a Brasil en amistoso internacional', // Título de la noticia
    summary: 'El equipo mexicano sorprendió a Brasil con una victoria 2-1.', // Resumen corto del contenido
    image: 'https://images.unsplash.com/photo-1505842465776-3bf6de6e10ae?w=400', // Imagen asociada a la noticia
    date: 'Oct 8, 2025', // Fecha de publicación
    category: 'Deportes', // Categoría a la que pertenece debe coincidir con alguna del arreglo anterior
  },
  {
    id: 2,
    title: 'Nuevo fichaje para la Liga Nacional',
    summary: 'El Club América anuncia la incorporación de una nueva estrella.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400',
    date: 'Oct 10, 2025',
    category: 'Deportes',
  },
  {
    id: 3,
    title: 'Avance en inteligencia artificial',
    summary: 'Una empresa tecnológica presenta un modelo revolucionario.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    date: 'Oct 9, 2025',
    category: 'Tecnología',
  },
  {
    id: 4,
    title: 'Día De Muertos en Oaxaca',
    summary:'Del 26 de octubre al 3 de noviembre, Oaxaca se llena de comparsas, flores y cultura para celebrar el Día de Muertos como ninguna otra región',
    image:'https://www.excelsior.com.mx/770x530/filters:format(webp):quality(75)/media/pictures/2025/10/08/3395066.jpg',
    date:'Oct 8, 2025',
    category:'Cultura',
  },
  {
    id: 5,
    title:'Defensa mantiene a 7 mil 300 elementos en la aplicación del Plan DN-III-E por lluvias',
    summary:'La dependencia detalló que en Veracruz se presenta el mayor despliegue operativo',
    image:'https://www.excelsior.com.mx/770x530/filters:format(webp):quality(75)/media/pictures/2025/10/14/3398277.jpg',
    date:'Oct 14,2025',
    category:'Nacional',
  },
  {
    id: 6,
    title:'Polonia despliega aviones mientras Ucrania sufre fuertes ataques aéreos rusos',
    summary:'Polonia envió aviones de combate a su espacio aéreo la mañana de este domingo, informaron sus fuerzas armadas, mientras su vecina Ucrania era objeto de un intenso bombardeo con misiles y drones rusos.',
    image:'https://media.cnn.com/api/v1/images/stellar/prod/rescatista.jpeg?q=w_1160,c_fill/f_webp',
    date:'Septiembre 28, 2025',
    category:'Internacional',
  },
  {
    id:7,
    title:'Temblor en Oaxaca',
    summary:'Se registra sismo de 4.3 en Matías Romero',
    image:'https://www.infobae.com/resizer/v2/6FEUQO4LGRFYZGNBS7TRSM5SO4.jpg?auth=82f20c7f1645192d8e68a4f378b497ba3e1ec2f028a523ef9a6256964013ce3e&smart=true&width=992&height=558&quality=85',
    date:'Oct 14,2025',
    category:'Estatal',
  },
  {
    id:8,
    title:'Presentarán libro sobre Palmeadoras de Tlaxiaco',
    summary:'Es una investigación que hizo el maestro, Tomás Ortega Ortega, del colegio de posgraduados y después de tres años',
    image:'https://www.diariodelamixteca.com/wp-content/uploads/2018/06/tortillas.jpg',
    date:'Junio 8,2018',
    category:'Municipal',
  }

];

