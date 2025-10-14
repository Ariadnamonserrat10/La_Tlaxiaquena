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
];

