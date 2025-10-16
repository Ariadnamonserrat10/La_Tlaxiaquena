import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BottomNav({ activeTab = 'home' }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Home */}
      <TouchableOpacity
        style={activeTab === 'home' ? styles.activeNavItem : styles.inactiveNavItem}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
        }
      >
        <Ionicons
          name="home-outline"
          size={24}
          color={activeTab === 'home' ? '#5B4CCC' : '#999'}
        />
        {activeTab === 'home' && <Text style={styles.activeNavText}>Home</Text>}
      </TouchableOpacity>

      {/* Radio */}
      <TouchableOpacity
        style={activeTab === 'radio' ? styles.activeNavItem : styles.inactiveNavItem}
        onPress={() => navigation.navigate('Radio')}
      >
        <Ionicons
          name="radio-outline"
          size={24}
          color={activeTab === 'radio' ? '#003366' : '#999'}
        />
        {activeTab === 'radio' && <Text style={styles.activeNavTextRadio}>FM</Text>}
      </TouchableOpacity>

      {/* Configuración */}
      <TouchableOpacity
        style={activeTab === 'settings' ? styles.activeNavItem : styles.inactiveNavItem}
        onPress={() => navigation.navigate('Configuración')}
      >
        <Ionicons
          name="settings-outline"
          size={24}
          color={activeTab === 'settings' ? '#5B4CCC' : '#999'}
        />
        {activeTab === 'settings' && <Text style={styles.activeNavText}>Config</Text>}
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
  activeNavTextRadio: {
    color: '#003366',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
