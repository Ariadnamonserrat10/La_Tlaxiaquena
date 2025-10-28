import React, { useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BottomNav({ activeTab = 'home' }) {
  const navigation = useNavigation();
  
  // Animaciones para cada tab
  const scaleHome = useRef(new Animated.Value(1)).current;
  const scaleRadio = useRef(new Animated.Value(1)).current;
  const scaleSocial = useRef(new Animated.Value(1)).current;
  const scaleSettings = useRef(new Animated.Value(1)).current;

  // Animación de pulso para el tab activo
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Función para animar el press (más rápida)
  const animatePress = (scale) => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.85,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 5,
        tension: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const renderNavItem = (tabName, icon, label, scale, route) => {
    const isActive = activeTab === tabName;
    
    return (
      <TouchableOpacity
        style={isActive ? styles.activeNavItem : styles.inactiveNavItem}
        onPress={() => {
          animatePress(scale);
          setTimeout(() => {
            if (tabName === 'home') {
              navigation.reset({
                index: 0,
                routes: [{ name: route }],
              });
            } else {
              navigation.navigate(route);
            }
          }, 50);
        }}
        activeOpacity={0.7}
      >
        <Animated.View 
          style={{ 
            transform: [
              { scale: isActive ? Animated.multiply(scale, pulseAnim) : scale }
            ]
          }}
        >
          <Ionicons
            name={icon}
            size={24}
            color={isActive ? '#0047AB' : '#999'}
          />
        </Animated.View>
        {isActive && <Text style={styles.activeNavText}>{label}</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderNavItem('home', 'home', 'Inicio', scaleHome, 'Home')}
      {renderNavItem('radio', 'radio', 'Radio', scaleRadio, 'Radio')}
      {renderNavItem('social', 'people', 'Social', scaleSocial, 'Social')}
      {renderNavItem('settings', 'settings-sharp', 'Ajustes', scaleSettings, 'Configuración')}
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
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  inactiveNavItem: {
    padding: 10,
  },
  activeNavText: {
    color: '#0047AB',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});