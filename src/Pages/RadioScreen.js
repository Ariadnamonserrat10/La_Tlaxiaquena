import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function RadioScreen() {
  const navigation = useNavigation(); // Para poder navegar
  const [listening, setListening] = useState(false);
  const [mensaje, setMensaje] = useState('Presiona ▶ para comenzar a escuchar');

  useEffect(() => {
    let interval;
    if (listening) {
      const mensajes = [
        '🎶 Tocando: Coldplay - Viva la Vida',
        '🎧 Tocando: Dua Lipa - Levitating',
        '📻 Anuncio: ¡Escucha sin interrupciones!',
        '🎵 Tocando: Imagine Dragons - Believer',
      ];
      let index = 0;
      interval = setInterval(() => {
        setMensaje(mensajes[index]);
        index = (index + 1) % mensajes.length;
      }, 3000);
    } else {
      setMensaje('Presiona ▶ para comenzar a escuchar');
    }

    return () => clearInterval(interval);
  }, [listening]);

  return (
    <View style={styles.container}>
      {/* Botón regresar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
        <Text style={styles.backText}>Inicio</Text>
      </TouchableOpacity>

      <Text style={styles.title}>RadioMix 101.5 FM</Text>

      <Ionicons 
        name={listening ? 'radio' : 'radio-outline'} 
        size={100} 
        color="#003366" 
        style={{ marginVertical: 30 }}
      />

      <TouchableOpacity style={styles.button} onPress={() => setListening(!listening)}>
        <Text style={styles.buttonText}>
          {listening ? '⏸ Detener' : '▶ Escuchar en vivo'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.message}>{mensaje}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 20 },
  title: { fontSize: 24, color: '#003366', fontWeight: 'bold' },
  button: {
    backgroundColor: '#5B4CCC',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  message: { color: '#333', fontSize: 16, textAlign: 'center', marginTop: 10 },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5B4CCC',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  backText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});