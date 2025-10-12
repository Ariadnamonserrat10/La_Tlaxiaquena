
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert  } from 'react-native';
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

      {/* Radio */}
      <TouchableOpacity style={styles.navItem} onPress={() => Alert.alert('Trabajando en ello')}>
        <View style={activeTab === 'radio' ? styles.activeNavItemRadio : styles.inactiveNavItem}>
          <Ionicons 
            name="radio-outline" 
            size={24} 
            color={activeTab === 'radio' ? '#003366' : '#B0B0B0'} 
          />
          {activeTab === 'radio' && (
            <Text style={styles.activeNavTextRadio}>FM</Text>
          )}
        </View>
      </TouchableOpacity>

      {/* Configuración */}
      <TouchableOpacity style={styles.navItem} onPress={() => Alert.alert('Trabajando en ello')}>
        <View style={activeTab === 'settings' ? styles.activeNavItemRadio : styles.inactiveNavItem}>
          <Ionicons 
            name="settings-outline" 
            size={24} 
            color={activeTab === 'settings' ? '#003366' : '#B0B0B0'} 
          />
          {activeTab === 'settings' && (
            <Text style={styles.activeNavTextRadio}>Settings</Text>
          )}
        </View>
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
