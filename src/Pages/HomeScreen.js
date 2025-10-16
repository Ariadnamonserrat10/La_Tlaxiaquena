import React, { useState, memo } from 'react';
import { 
  View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { categorias, noticias } from '../data/Noticias';
import AppBar from '../Components/AppBar';
import BottomNav from '../Components/BottomNav';
import { Ionicons } from '@expo/vector-icons';

// Tarjeta de categoría
const CategoriaCard = memo(({ name, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.categoryCard} onPress={onPress}>
      <View style={styles.categoryImageContainer}>
        <Image
          source={{ uri: image, cache: 'force-cache' }}
          style={styles.categoryImage}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.categoryName}>{String(name)}</Text>
    </TouchableOpacity>
  );
});

// Tarjeta de noticia
const NewsCard = memo(({ item, onPress }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image, cache: 'force-cache' }}
        style={styles.cardImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{String(item.title)}</Text>
        <Text style={styles.cardSummary}>{String(item.summary)}</Text>
        <Text style={styles.cardDate}>{String(item.date)}</Text>
        <TouchableOpacity style={styles.cardButton} onPress={onPress}>
          <Text style={styles.cardButtonText}>Ver más</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

// Pantalla principal
export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  // Filtrado de noticias por categoría y búsqueda
  const filteredNews = noticias.filter(n => {
    const matchCategory = selectedCategory ? n.category === selectedCategory : true;
    const matchSearch = searchQuery
      ? n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.summary.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchCategory && matchSearch;
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Barra superior */}
      <AppBar onSearchPress={() => setSearchVisible(true)} />

      {/* Carrusel de categorías */}
      <View style={{ paddingVertical: 10, backgroundColor: '#fff' }}>
        <FlatList
          data={categorias}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={cat => String(cat.id)}
          renderItem={({ item }) => (
            <CategoriaCard
              name={item.name}
              image={item.image}
              onPress={() => setSelectedCategory(item.name)}
            />
          )}
          style={styles.carousel}
        />
      </View>

      {/* Lista de noticias */}
      <FlatList
        data={filteredNews}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <NewsCard
            item={item}
            onPress={() => navigation.navigate('NewsDetail', { news: item })}
          />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        removeClippedSubviews={true}
        initialNumToRender={5}
      />

      {/* Modal de búsqueda */}
      <Modal visible={searchVisible} animationType="fade" transparent={true}>
        <View style={styles.searchModal}>
          <View style={styles.searchModalContent}>
            <View style={styles.searchInputContainer}>
              <Ionicons name="search" size={20} color="#999" />
              <TextInput
                style={styles.searchInput}
                placeholder="Buscar noticias..."
                value={searchQuery}
                onChangeText={setSearchQuery} // Esto actualiza en tiempo real
                autoFocus
              />
              <TouchableOpacity onPress={() => setSearchVisible(false)}>
                <Ionicons name="close" size={24} color="#2D2D2D" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
  searchModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchModalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
    padding: 15,
    elevation: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    height: 40,
  },
});
