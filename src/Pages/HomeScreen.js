import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
// Importa el componente que muestra cada tarjeta de categoría
import CategoriaCard from '../Components/CategoriaCard';
// Importa los datos de categorías y noticias desde el archivo Noticias.js
import { categorias, noticias } from '../data/Noticias';
// Importa la barra superior personalizada (AppBar)
import AppBar from '../Components/AppBar';
// Importa la barra de navegación inferior (BottomNav)
import BottomNav from '../Components/BottomNav';
// Se define y exporta el componente funcional principal HomeScreen
export default function HomeScreen() {
  // Estado que guarda qué categoría fue seleccionada
  // Si es null, se muestran todas las noticias
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filtra las noticias según la categoría seleccionada
  // Si no hay categoría seleccionada muestra todas
  const filteredNews = selectedCategory
    ? noticias.filter(n => n.category === selectedCategory)
    : noticias; // Mostrar todas si no hay categoría seleccionada

  // Se devuelve toda la interfaz que se mostrará en la pantalla
  return (
    <View style={{ flex: 1 }}>
      {/* Barra superior (título, iconos, etc.) */}
      <AppBar />

      {/* Scroll principal para que todo el contenido sea desplazable */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Título principal "Categorías" */}
        <Text style={styles.title}>Categorías</Text>

        {/* Scroll horizontal para mostrar las categorías en forma de carrusel */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
          {/* Se recorre el arreglo de categorías y se renderiza un componente por cada una */}
          {categorias.map(cat => (
            <CategoriaCard
              key={cat.id} // Clave única
              name={cat.name} // Nombre de la categoría
              image={cat.image} // Imagen de la categoría
              onPress={() => setSelectedCategory(cat.name)} // Al presionar, cambia la categoría seleccionada
            />
          ))}
        </ScrollView>

        {/* Si hay noticias filtradas, se muestran */}
        {filteredNews.length > 0 && (
          <>
            {/* Título de la sección de noticias */}
            <Text style={styles.newsTitle}>
              {selectedCategory ? `Noticias de ${selectedCategory}` : 'Todas las noticias'}
            </Text>

            {/* Recorre y muestra cada noticia filtrada */}
            {filteredNews.map(item => (
              <View key={item.id} style={styles.card}>
                {/* Imagen principal de la noticia */}
                <Image source={{ uri: item.image }} style={styles.cardImage} />

                {/* Contenedor con texto y botón */}
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardSummary}>{item.summary}</Text>
                  <Text style={styles.cardDate}>{item.date}</Text>

                  {/* Botón Ver más */}
                  <TouchableOpacity style={styles.cardButton}>
                    <Text style={styles.cardButtonText}>Ver más</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </>
        )}
      </ScrollView>

      {/* Barra de navegación inferior con la pestaña home */}
      <BottomNav activeTab="home" />
    </View>
  );
}

// Definición de los estilos de la pantalla
const styles = StyleSheet.create({
  // Título "Categorías"
  title: { 
    fontSize: 22, // Tamaño grande
    fontWeight: 'bold', // En negritas
    marginHorizontal: 15, // Margen lateral
    marginTop: 10, // Espacio superior
  },

  // Carrusel de categorías 
  carousel: { 
    paddingLeft: 15, 
    marginBottom: 15, 
  },

  // Título de la sección de noticias
  newsTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginHorizontal: 15, 
    marginVertical: 10, 
  },

  // Tarjeta individual de cada noticia
  card: { 
    backgroundColor: '#fff', // Fondo blanco
    borderRadius: 15, // Bordes redondeados
    marginHorizontal: 15, 
    marginBottom: 20,
    overflow: 'hidden', // Evita que se salgan los bordes redondeados
    elevation: 3, // Sombra (Android)
  },

  // Imagen superior de la noticia
  cardImage: { 
    width: '100%', 
    height: 180, 
  },

  // Contenedor del texto dentro de la tarjeta
  cardContent: { 
    padding: 15, 
  },

  // Título de la noticia
  cardTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 8, 
  },

  // Resumen de la noticia
  cardSummary: { 
    fontSize: 14, 
    color: '#666', 
    marginBottom: 10, 
  },

  // Fecha de la noticia
  cardDate: { 
    fontSize: 12, 
    color: '#999', 
    marginBottom: 10, 
  },

  // Botón "Ver más"
  cardButton: { 
    alignSelf: 'flex-start', 
    backgroundColor: '#0a325aff', // Azul oscuro
    paddingVertical: 6, 
    paddingHorizontal: 15, 
    borderRadius: 10, 
  },

  // Texto dentro del botón
  cardButtonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 14, 
  },
});


