import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppBar from '../Components/AppBar';
import BottomNav from '../Components/BottomNav';
import CategoriaCard from '../Components/CategoriaCard';



const categories = [
  { id: 1, name: 'Política', image: 'https://i.pinimg.com/1200x/66/86/6e/66866ec8c4035dbc4411fbefc6da4136.jpg' },
  { id: 2, name: 'Deportess', image: 'https://i.pinimg.com/736x/b8/0c/36/b80c3618c938a9b7f59327099514d230.jpg' },
  { id: 3, name: 'Tecnología', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300' },
  { id: 4, name: 'Cultura', image: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=300' },
  { id: 5, name: 'Nacional', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800' },
  { id: 6, name: 'Internacional', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800' },
  { id: 7, name: 'Estatal', image: 'https://i.pinimg.com/1200x/cc/f0/92/ccf092c360a3869e7c6764059bb8b140.jpg' },
  { id: 8, name: 'Municipal', image: 'https://i.pinimg.com/1200x/16/96/0e/16960e58ee0cb22b962316083f33eae4.jpg' },
];

const news = [
  {
    id: 1,
    title: 'Nuevo avance en inteligencia artificial',
    summary: 'Una empresa tecnológica ha presentado un modelo revolucionario de IA que promete cambiar la forma en que interactuamos con la tecnología.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    date: 'Oct 9, 2025',
    category: ['Tecnología'],
  },
  {
    id: 2,
    title: 'México vence a Brasil en amistoso internacional',
    summary: 'El equipo mexicano sorprendió a Brasil con una victoria 2-1 en un partido lleno de emoción y jugadas destacadas.',
    image: 'https://images.unsplash.com/photo-1505842465776-3bf6de6e10ae?w=400',
    date: 'Oct 8, 2025',
    category: ['Deportes'],
  },
  {
    id: 3,
    title: 'Innovaciones en energías renovables',
    summary: 'Se anuncian nuevos proyectos de energía solar y eólica que prometen cambiar la matriz energética de varios países.',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=400',
    date: 'Oct 7, 2025',
    category: ['Tecnología'],
  },
  {
    id: 4,
    title: 'Exposición cultural abre en la ciudad',
    summary: 'Una nueva exposición cultural ofrece un recorrido por el arte contemporáneo local con instalaciones interactivas.',
    image: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=400',
    date: 'Oct 6, 2025',
    category: ['Cultura'],
  },
];

export default function HomeScreen() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredNews = selectedCategory
    ? news.filter((n) => n.category.includes(selectedCategory))
    : news;

  return (
    <View style={styles.container}>
      <AppBar onSearchPress={() => setSearchVisible(true)} />

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
                onChangeText={setSearchQuery}
                autoFocus
              />
              <TouchableOpacity onPress={() => setSearchVisible(false)}>
                <Ionicons name="close" size={24} color="#2D2D2D" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Categorías */}
      <View style={styles.section}>
        <Text style={styles.title}>Categorías</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
          {categories.map((cat) => (
            <CategoriaCard
              key={cat.id}
              name={cat.name}
              image={cat.image}
              onPress={() => setSelectedCategory(cat.name)} // 🔹 cambia categoría activa
              style={styles.categoryCard}
            />
          ))}
        </ScrollView>
      </View>

      {/* Noticias */}
      <ScrollView style={styles.newsSection}>
        <Text style={styles.title}>
          {selectedCategory ? `Noticias ${selectedCategory}` : 'Últimas noticias'}
        </Text>

        {filteredNews.length > 0 ? (
          filteredNews.map((n) => (
            <View key={n.id} style={styles.newsCard}>
              <Image source={{ uri: n.image }} style={styles.newsImage} />
              <View style={styles.newsContent}>
                <Text style={styles.newsTitle}>{n.title}</Text>
                <Text style={styles.newsSummary}>{n.summary}</Text>
                <Text style={styles.newsDate}>{n.date}</Text>
                <TouchableOpacity
                  style={styles.moreButton}
                  onPress={() => console.log(`Ver más de: ${n.title}`)}
                >
                  <Text style={styles.moreButtonText}>Ver más</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            No hay noticias de esta categoría
          </Text>
        )}
      </ScrollView>

      <BottomNav activeTab="home" />


    </View>
  );
}

const styles = StyleSheet.create({
  // Contenedor principal
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  // Modal de búsqueda
  searchModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  searchModalContent: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    paddingHorizontal: 15,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    color: '#2D2D2D',
  },

  //Categorias
  section: {
    backgroundColor: '#FFFFFF',
    paddingTop: 5,       
  paddingBottom: 5,    
  marginTop: 0,  
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D2D2D',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  carousel: {
    paddingLeft: 10,
  },
  

  // Noticias
  newsSection: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  newsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  newsImage: {
    width: '100%',
    height: 180,
  },
  newsContent: {
    padding: 15,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  newsSummary: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  newsDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 10,
  },
  moreButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#0a325aff',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  moreButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
