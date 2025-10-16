import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function NewsDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { news } = route.params;

  // Separa el contenido en párrafos para renderizar de manera eficiente
  const paragraphs = news.content ? news.content.split('\n') : [];

  return (
    <View style={styles.container}>
      {/* Scroll principal */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Imagen superior */}
        <Image source={{ uri: news.image }} style={styles.newsImage} resizeMode="cover" />

        {/* Contenedor de la información */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{news.title}</Text>
          <Text style={styles.date}>{news.date}</Text>

          {paragraphs.map((p, index) => (
            <Text key={index} style={styles.content}>{p}</Text>
          ))}
        </View>
      </ScrollView>

      {/* Navbar inferior con botón circular de regresar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 120,
    flexGrow: 1,
  },
  newsImage: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  contentContainer: {
    backgroundColor: '#fff',
    marginTop: -20, 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 400,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  date: {
    fontSize: 14,
    color: '#999',
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    color: '#333',
    lineHeight: 26,
    marginBottom: 15,
  },
  navbar: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 30 : 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  backButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0a325aff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
