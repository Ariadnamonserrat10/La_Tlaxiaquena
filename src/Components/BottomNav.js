import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomNav({ activeTab = 'home' }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <View style={activeTab === 'home' ? styles.activeNavItem : styles.inactiveNavItem}>
          <Ionicons 
            name="home" 
            size={24} 
            color={activeTab === 'home' ? '#5B4CCC' : '#B0B0B0'} 
          />
          {activeTab === 'home' && (
            <Text style={styles.activeNavText}>Home</Text>
          )}
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="heart-outline" size={24} color="#B0B0B0" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="compass-outline" size={24} color="#B0B0B0" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="person-outline" size={24} color="#B0B0B0" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingBottom: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  activeNavItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E5FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  inactiveNavItem: {
    padding: 10,
  },
  activeNavText: {
    color: '#5B4CCC',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
