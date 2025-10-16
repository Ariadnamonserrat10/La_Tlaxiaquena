import React, { useRef, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppBar({ onSearchPress, onNotificationsPress, hasUnread }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (hasUnread) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleAnim, { toValue: 1.4, duration: 500, useNativeDriver: true }),
          Animated.timing(scaleAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
        ])
      ).start();
    }
  }, [hasUnread]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../img/nt-el-reloj-circular.gif')}
        style={styles.logo}
      />

      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={onSearchPress} style={styles.iconButton}>
          <Ionicons name="search" size={24} color="#2D2D2D" />
        </TouchableOpacity>

        <TouchableOpacity onPress={onNotificationsPress} style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={24} color="#2D2D2D" />
          {hasUnread && (
            <Animated.View style={[styles.unreadDot, { transform: [{ scale: scaleAnim }] }]} />
          )}
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
    paddingBottom: 20, 
    backgroundColor: '#FFFFFF' 
  },
  logo: { 
    width: 60, 
    height: 60, 
    borderRadius: 10 
  },
  rightIcons: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 15 
  },
  iconButton: { 
    padding: 8 
  },
  unreadDot: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ff3b30',
    borderWidth: 1,
    borderColor: '#fff',
  },
});