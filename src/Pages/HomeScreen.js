import React, { useState, memo } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { categorias, noticias } from '../data/Noticias';
import AppBar from '../Components/AppBar';
import BottomNav from '../Components/BottomNav';

// Tarjeta de categoría
// Se usa memo para que solo se re-renderice si cambian las props
const CategoriaCard = memo(({ name, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.categoryCard} onPress={onPress}>
      {/* Imagen de la categoría */}
      <View style={styles.categoryImageContainer}>
        <Image
          source={{ uri: image, cache: 'force-cache' }}
          style={styles.categoryImage}
          resizeMode="cover"
        />
      </View>
      {/* Nombre de la categoría */}
      <Text style={styles.categoryName}>{name}</Text>
    </TouchableOpacity>
  );
});

// Tarjeta de noticia
// Muestra la imagen, título, resumen, fecha y botón de ver más
const NewsCard = memo(({ item, onPress }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image, cache: 'force-cache' }}
        style={styles.cardImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSummary}>{item.summary}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
        {/* Botón para navegar a detalle */}
        <TouchableOpacity style={styles.cardButton} onPress={onPress}>
          <Text style={styles.cardButtonText}>Ver más</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

// Pantalla principal

export default function HomeScreen() {
  // Estado para saber qué categoría está seleccionada
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigation = useNavigation(); // Para navegar a otras pantallas

  // Filtra las noticias según la categoría seleccionada
  const filteredNews = selectedCategory
    ? noticias.filter(n => n.category === selectedCategory)
    : noticias;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Barra superior */}
      <AppBar />

      {/* Carrusel de categorías*/}
      <View style={{ paddingVertical: 10, backgroundColor: '#fff' }}>
        <FlatList
          data={categorias} // Datos de categorías
          horizontal // Lista horizontal
          showsHorizontalScrollIndicator={false} // Oculta scroll
          keyExtractor={cat => cat.id.toString()} // Clave única
          renderItem={({ item }) => (
            <CategoriaCard
              name={item.name}
              image={item.image}
              // Al tocar una categoría, se guarda en el estado
              onPress={() => setSelectedCategory(item.name)}
            />
          )}
          style={styles.carousel}
        />
      </View>

      {/* Lista de noticias */}
      <FlatList
        data={filteredNews} // Noticias filtradas según categoría
        keyExtractor={item => item.id.toString()} // Clave única
        renderItem={({ item }) => (
          <NewsCard
            item={item}
            // Al tocar "Ver más", navega a la pantalla NewsDetail
            onPress={() =>
              navigation.navigate('NewsDetail', { news: item })
            }
          />
        )}
        contentContainerStyle={{ paddingBottom: 100 }} // Evita que se tape con BottomNav
        removeClippedSubviews={true} // Optimiza rendimiento
        initialNumToRender={5} // Renderiza solo 5 al inicio
      />

      {/* Barra inferior */}
      <BottomNav activeTab="home" />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  carousel: {
    paddingLeft: 15,
    marginBottom: 15,
  },
  categoryCard: {
    width: 120,
    marginRight: 15,
    alignItems: 'center',
  },
  categoryImageContainer: {
    width: 120,
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#eee', 
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryName: {
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 15,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3, 
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardSummary: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  cardDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 10,
  },
  cardButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#0a325aff',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  cardButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
