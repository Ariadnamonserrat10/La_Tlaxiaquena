import React, { useState, memo } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { categorias, noticias } from '../data/Noticias';
import AppBar from '../Components/AppBar';
import BottomNav from '../Components/BottomNav';

// Tarjeta de categoría
const CategoriaCard = memo(({ name, image, onPress }) => (
  <TouchableOpacity style={styles.categoryCard} onPress={onPress}>
    <View style={styles.categoryImageContainer}>
      <Image source={{ uri: image, cache: 'force-cache' }} style={styles.categoryImage} resizeMode="cover" />
    </View>
    <Text style={styles.categoryName}>{name}</Text>
  </TouchableOpacity>
));

// Tarjeta de noticia
const NewsCard = memo(({ item, onPress }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.image, cache: 'force-cache' }} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSummary}>{item.summary}</Text>
      <Text style={styles.cardDate}>{item.date}</Text>
      <TouchableOpacity style={styles.cardButton} onPress={onPress}>
        <Text style={styles.cardButtonText}>Ver más</Text>
      </TouchableOpacity>
    </View>
  </View>
));

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [unreadCount, setUnreadCount] = useState(1); // Puntito rojo inicial
  const navigation = useNavigation();

  const filteredNews = selectedCategory
    ? noticias.filter(n => n.category === selectedCategory)
    : noticias;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <AppBar
        onSearchPress={() => {}}
        onNotificationsPress={() => navigation.navigate('Notifications', { markRead: true })}
        hasUnread={unreadCount > 0}
      />

      {/* Carrusel de categorías */}
      <View style={{ paddingVertical: 10, backgroundColor: '#fff' }}>
        <FlatList
          data={categorias}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={cat => cat.id.toString()}
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
        keyExtractor={item => item.id.toString()}
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

      <BottomNav activeTab="home" />
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: { paddingLeft: 15, marginBottom: 15 },
  categoryCard: { width: 120, marginRight: 15, alignItems: 'center' },
  categoryImageContainer: { width: 120, height: 80, borderRadius: 10, overflow: 'hidden', backgroundColor: '#eee' },
  categoryImage: { width: '100%', height: '100%' },
  categoryName: { marginTop: 5, fontWeight: 'bold', textAlign: 'center' },
  card: { backgroundColor: '#fff', borderRadius: 15, marginHorizontal: 15, marginBottom: 20, overflow: 'hidden', elevation: 3 },
  cardImage: { width: '100%', height: 180 },
  cardContent: { padding: 15 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  cardSummary: { fontSize: 14, color: '#666', marginBottom: 10 },
  cardDate: { fontSize: 12, color: '#999', marginBottom: 10 },
  cardButton: { alignSelf: 'flex-start', backgroundColor: '#0a325aff', paddingVertical: 6, paddingHorizontal: 15, borderRadius: 10 },
  cardButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});
