import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppBar({ onSearchPress }) {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../img/nt-el-reloj-circular.gif')}
        style={styles.logo}
      />

      {/* Iconos derecha */}
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={onSearchPress} style={styles.iconButton}>
          <Ionicons name="search" size={24} color="#2D2D2D" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={24} color="#2D2D2D" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 5,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  iconButton: {
    padding: 8,
  },
});

