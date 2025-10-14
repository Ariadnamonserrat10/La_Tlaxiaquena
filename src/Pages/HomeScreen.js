import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import BottomNav from '../Components/BottomNav';
import AppBar from '../Components/AppBar';

const { width } = Dimensions.get('window');

const popularCities = [
  { id: 1, name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300' },
  { id: 2, name: 'Kyoto', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300' },
  { id: 3, name: 'Machu', image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=300' },
  { id: 4, name: 'New York', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300' },
];

const recommended = [
  {
    id: 1,
    name: 'Santorini, Greece',
    distance: '234 miles away',
    price: '$180',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400',
    likes: 5,
  },
  {
    id: 2,
    name: 'Grand Canyon',
    distance: '277 miles away',
    price: '$240',
    image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=400',
    likes: 8,
  },
  {
    id: 3,
    name: 'Bali, Indonesia',
    distance: '456 miles away',
    price: '$150',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400',
    likes: 12,
  },
];

export default function HomeScreen() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      {/* AppBar Component */}
      <AppBar onSearchPress={() => setSearchVisible(true)} />

      {/* Modal de búsqueda */}
      <Modal visible={searchVisible} animationType="fade" transparent={true}>
        <View style={styles.searchModal}>
          <View style={styles.searchModalContent}>
            <View style={styles.searchInputContainer}>
              <Ionicons name="search" size={20} color="#999" />
              <TextInput
                style={styles.searchInput}
                placeholder="Discover a city"
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

      {/* Popular Section */}
      <View style={styles.popularSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular</Text>
          <TouchableOpacity>
            <Text style={styles.showAll}>Show all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
          {popularCities.map((city) => (
            <TouchableOpacity key={city.id} style={styles.cityCard}>
              <Image source={{ uri: city.image }} style={styles.cityImage} />
              <Text style={styles.cityName}>{city.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Recommended Section */}
      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.recommendedSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended</Text>
            <TouchableOpacity>
              <Text style={styles.showAll}>Show all</Text>
            </TouchableOpacity>
          </View>

          {recommended.map((place) => (
            <View key={place.id} style={styles.recommendedCard}>
              <Image source={{ uri: place.image }} style={styles.recommendedImage} />
              <TouchableOpacity style={styles.likeButton}>
                <Ionicons name="heart" size={20} color="#5B4CCC" />
              </TouchableOpacity>
              <View style={styles.recommendedInfo}>
                <Text style={styles.placeName}>{place.name}</Text>
                <Text style={styles.distance}>{place.distance}</Text>
                <View style={styles.priceRow}>
                  <View>
                    <Text style={styles.priceLabel}>Start from</Text>
                    <Text style={styles.price}>{place.price}</Text>
                  </View>
                  <View style={styles.likesContainer}>
                    <Ionicons name="thumbs-up" size={16} color="#FFFFFF" />
                    <Text style={styles.likesText}>{place.likes}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* BottomNav Component */}
      <BottomNav activeTab="home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  searchModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  searchModalContent: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 15,
    padding: 15,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    gap: 10,
  },
  searchInput: { flex: 1, fontSize: 16, paddingVertical: 12, color: '#2D2D2D' },
  popularSection: { backgroundColor: '#FFFFFF', paddingTop: 20, paddingBottom: 15 },
  scrollContent: { flex: 1 },
  recommendedSection: { paddingTop: 20, paddingBottom: 20 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: { fontSize: 24, fontWeight: 'bold', color: '#2D2D2D' },
  showAll: { fontSize: 14, color: '#999' },
  carousel: { paddingLeft: 20 },
  cityCard: { marginRight: 15, alignItems: 'center' },
  cityImage: { width: 80, height: 80, borderRadius: 20, marginBottom: 8 },
  cityName: { fontSize: 14, fontWeight: '600', color: '#2D2D2D' },
  recommendedCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  recommendedImage: { width: '100%', height: 200 },
  likeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommendedInfo: { padding: 15 },
  placeName: { fontSize: 18, fontWeight: 'bold', color: '#2D2D2D', marginBottom: 5 },
  distance: { fontSize: 14, color: '#999', marginBottom: 10 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  priceLabel: { fontSize: 12, color: '#999' },
  price: { fontSize: 24, fontWeight: 'bold', color: '#2D2D2D' },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5B4CCC',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  likesText: { color: '#FFFFFF', fontWeight: 'bold', marginLeft: 5 },
});
