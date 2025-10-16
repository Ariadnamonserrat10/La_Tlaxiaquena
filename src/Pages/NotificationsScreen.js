import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Vibration, Animated } from 'react-native';
import AppBar from '../Components/AppBar';
import BottomNav from '../Components/BottomNav';

const initialNotifications = [
  {
    id: 1,
    title: 'Bienvenido',
    description: 'Esta es tu primera notificación.',
    time: 'Ahora',
    icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827279.png',
    unread: true,
  },
];

const sampleNotifications = [
  { title: 'Actualización disponible', description: 'Mejoras visuales y nuevas funciones añadidas.', icon: 'https://cdn-icons-png.flaticon.com/512/992/992703.png' },
  { title: 'Recordatorio', description: 'Revisa tus noticias favoritas diariamente.', icon: 'https://cdn-icons-png.flaticon.com/512/561/561127.png' },
  { title: 'Nuevo evento', description: 'Se ha programado un evento especial para hoy.', icon: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' },
];

function NotificationCard({ item }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(translateY, { toValue: 0, duration: 400, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <Animated.View style={[styles.card, { opacity: fadeAnim, transform: [{ translateY }] }]}>
      <View style={styles.iconContainer}>
        <Image source={{ uri: item.icon }} style={styles.icon} />
        {item.unread && <View style={styles.unreadDot} />}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.timeBadge}>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </Animated.View>
  );
}

export default function NotificationsScreen({ navigation, route }) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const nextId = useRef(2);

  const markRead = route?.params?.markRead || false;

  // Marcar todas como leídas al entrar
  useEffect(() => {
    if (markRead) {
      setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
    }
  }, [markRead]);

  // Agregar nuevas notificaciones cada 20 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * sampleNotifications.length);
      const newNotification = {
        id: nextId.current,
        title: sampleNotifications[random].title,
        description: sampleNotifications[random].description,
        icon: sampleNotifications[random].icon,
        time: 'Ahora',
        unread: true,
      };
      nextId.current += 1;

      Vibration.vibrate(300); // vibración al recibir nueva notificación

      setNotifications(prev => [newNotification, ...prev]);
    }, 20000); // 20 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <AppBar
        onSearchPress={() => {}}
        onNotificationsPress={() => {}}
        hasUnread={notifications.some(n => n.unread)}
      />

      <FlatList
        data={notifications}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <NotificationCard item={item} />}
        contentContainerStyle={{ padding: 15, paddingBottom: 100 }}
      />

      <BottomNav activeTab="notifications" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: '#f9f9f9', borderRadius: 12, padding: 12, marginBottom: 12, elevation: 2 },
  iconContainer: { marginRight: 12, position: 'relative' },
  icon: { width: 40, height: 40, borderRadius: 20 },
  unreadDot: { position: 'absolute', top: -2, right: -2, width: 10, height: 10, borderRadius: 5, backgroundColor: '#ff3b30', borderWidth: 1, borderColor: '#fff' },
  textContainer: { flex: 1 },
  title: { fontWeight: 'bold', fontSize: 16, marginBottom: 2 },
  description: { fontSize: 14, color: '#555' },
  timeBadge: { justifyContent: 'center', alignItems: 'center' },
  timeText: { fontSize: 12, color: '#999' },
});
