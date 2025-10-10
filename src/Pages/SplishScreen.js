import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Image, Easing } from 'react-native';
import HomeScreen from './HomeScreen';

const { width, height } = Dimensions.get('window');

export default function SplishScreen({ navigation }) {
  const [progress, setProgress] = useState(0);
  const [showTransition, setShowTransition] = useState(false);
  const [hideElements, setHideElements] = useState(false);

  const progressAnim = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(1)).current;
  const elementsOpacity = useRef(new Animated.Value(1)).current;
  
  // Animación de círculo expansivo desde el centro
  const circleScale = useRef(new Animated.Value(0)).current;
  const circleOpacity = useRef(new Animated.Value(1)).current;
  
  // Partículas que explotan
  const particles = Array.from({ length: 20 }, () => ({
    x: useRef(new Animated.Value(0)).current,
    y: useRef(new Animated.Value(0)).current,
    opacity: useRef(new Animated.Value(0)).current,
  }));

  // Animación sutil de zoom del logo
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(logoScale, {
          toValue: 1.05,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Simular carga de progreso
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Animación de la barra de progreso
  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 80,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  // Iniciar transición explosiva cuando llegue a 100%
  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setShowTransition(true);
        startExplosiveTransition();
      }, 500);
    }
  }, [progress]);

  const startExplosiveTransition = () => {
    // Animar partículas explotando
    particles.forEach((particle, index) => {
      const angle = (index / particles.length) * Math.PI * 2;
      const distance = 200;
      
      Animated.parallel([
        Animated.timing(particle.x, {
          toValue: Math.cos(angle) * distance,
          duration: 800,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(particle.y, {
          toValue: Math.sin(angle) * distance,
          duration: 800,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.timing(particle.opacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(particle.opacity, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    });

    // Círculo expansivo con fade
    Animated.parallel([
      Animated.timing(circleScale, {
        toValue: 20,
        duration: 1000,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: true,
      }),
      Animated.timing(circleOpacity, {
        toValue: 0,
        duration: 800,
        delay: 200,
        useNativeDriver: true,
      }),
      Animated.timing(elementsOpacity, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setHideElements(true);
    });
  };

  // Interpolación para el color de la barra
  const barColor = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['#5B4CCC', '#FF4C4C'],
  });

  // Si ya terminó la animación, solo mostrar HomeScreen
  if (hideElements) {
    return <HomeScreen />;
  }

  return (
    <View style={styles.container}>
      {/* HomeScreen renderizado detrás desde que inicia la transición */}
      {showTransition && (
        <View style={styles.homeContainer}>
          <HomeScreen />
        </View>
      )}

      {/* Círculo expansivo con degradado */}
      {showTransition && (
        <Animated.View
          style={[
            styles.explosiveCircle,
            {
              opacity: circleOpacity,
              transform: [{ scale: circleScale }],
            },
          ]}
        >
          {/* Degradado simulado con múltiples capas */}
          <View style={styles.circleLayer1} />
          <View style={styles.circleLayer2} />
          <View style={styles.circleLayer3} />
        </Animated.View>
      )}

      {/* Partículas explosivas */}
      {showTransition && particles.map((particle, index) => (
        <Animated.View
          key={index}
          style={[
            styles.particle,
            {
              opacity: particle.opacity,
              transform: [
                { translateX: particle.x },
                { translateY: particle.y },
              ],
            },
          ]}
        />
      ))}

      {/* Logo con zoom sutil */}
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: elementsOpacity,
            transform: [{ scale: logoScale }],
          },
        ]}
      >
        <Image
          source={require('../img/nt-el-reloj-circular.gif')}
          style={styles.logo}
        />
      </Animated.View>

      {/* Barra de progreso */}
      <Animated.View
        style={[
          styles.progressContainer,
          { opacity: elementsOpacity },
        ]}
      >
        <View style={styles.progressBarBg}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: progressAnim.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
                backgroundColor: barColor,
              },
            ]}
          />
        </View>
        <Text style={styles.progressText}>{Math.floor(progress)}%</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  explosiveCircle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    zIndex: 1,
    overflow: 'hidden',
  },
  circleLayer1: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#5B4CCC',
  },
  circleLayer2: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#7B6CEC',
    opacity: 0.6,
    transform: [{ scale: 0.8 }],
  },
  circleLayer3: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FF4C4C',
    opacity: 0.4,
    transform: [{ scale: 0.6 }],
  },
  particle: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#5B4CCC',
    zIndex: 2,
  },
  logoContainer: {
    marginBottom: 50,
    zIndex: 3,
  },
  logo: {
    width: 180,
    height: 180,
    borderRadius: 20,
  },
  progressContainer: {
    width: width * 0.7,
    alignItems: 'center',
    zIndex: 3,
  },
  progressBarBg: {
    width: '100%',
    height: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 6,
  },
  progressText: {
    marginTop: 8,
    color: '#2D2D2D',
    fontWeight: 'bold',
    fontSize: 16,
  },
});