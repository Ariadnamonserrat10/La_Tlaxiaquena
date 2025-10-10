import { BlurView } from 'expo-blur';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function NewsCard({ news, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: news.image }} style={styles.newsImage} />
      <BlurView intensity={80} tint="light" style={styles.newsCard}>
        <Text style={styles.newsTitle}>{news.title}</Text>
        <Text style={styles.newsSummary}>{news.summary}</Text>
        <Text style={styles.newsDate}>{news.date}</Text>
        <TouchableOpacity style={styles.moreButton} onPress={onPress}>
          <Text style={styles.moreButtonText}>Ver más</Text>
        </TouchableOpacity>
      </BlurView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // Imagen de la noticia
  newsImage: {
    width: '100%',
    height: 180,
    borderRadius: 20,
  },

  // Card de la noticia con efecto glass
  newsCard: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    borderRadius: 20,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // semi-transparente para glass effect
  },

  // Texto dentro de la card
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  newsSummary: {
    fontSize: 14,
    color: '#eee',
    marginBottom: 10,
  },
  newsDate: {
    fontSize: 12,
    color: '#ccc',
    marginBottom: 10,
  },

  // Botón Ver más
  moreButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(30, 144, 255, 0.8)',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  moreButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
