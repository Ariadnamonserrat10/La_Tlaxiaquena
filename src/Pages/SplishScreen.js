import React, { useState, useEffect, useMemo } from 'react';
import { View, StyleSheet, Animated, Dimensions, Image, Easing, Text } from 'react-native';
import HomeScreen from './HomeScreen';

const { width, height } = Dimensions.get('window');

const createAnimatedValues = () => ({
  logoY: new Animated.Value(height / 2 + 200),
  logoOpacity: new Animated.Value(0),
  logoScale: new Animated.Value(0.5),
  progressRotation: new Animated.Value(0),
  progressOpacity: new Animated.Value(0),
  elementsOpacity: new Animated.Value(1),
  sceneScale: new Animated.Value(1),
  sceneRotate: new Animated.Value(0),
});

const createParticleArrays = () => {
  const createParticles = (count) =>
    Array.from({ length: count }, () => ({
      x: new Animated.Value(0),
      y: new Animated.Value(0),
      opacity: new Animated.Value(0),
      scale: new Animated.Value(0.5),
    }));

  return {
    orbit: createParticles(12),
    mini: createParticles(30),
    explosion: createParticles(50),
  };
};

export default function SplishScreen({ navigation }) {
  const [progress, setProgress] = useState(0);
  const [showTransition, setShowTransition] = useState(false);
  const [hideElements, setHideElements] = useState(false);
  const [logoFixed, setLogoFixed] = useState(false);

  const anims = useMemo(() => createAnimatedValues(), []);
  const particles = useMemo(() => createParticleArrays(), []);

  // ✅ Contador más fluido y sin saltos
  useEffect(() => {
    if (!logoFixed) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1; // incremento más suave
      });
    }, 50); // velocidad más fluida y natural
    return () => clearInterval(interval);
  }, [logoFixed]);

  // Animación de logo centrado con rebote
  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.sequence([
        Animated.timing(anims.logoOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(anims.logoY, {
          toValue: 0, // centrado verticalmente
          duration: 1800,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.timing(anims.logoScale, {
            toValue: 1.15,
            duration: 200,
            easing: Easing.out(Easing.elastic(1.3)),
            useNativeDriver: true,
          }),
          Animated.timing(anims.logoScale, {
            toValue: 1,
            duration: 200,
            easing: Easing.out(Easing.elastic(1.1)),
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => {
        setLogoFixed(true);
        Animated.timing(anims.progressOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }).start(() => {
          startProgressRotation();
          startMiniParticlesPulse();
        });
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        startTransitionAnimation();
      }, 100);
    }
  }, [progress]);

  const startProgressRotation = () => {
    Animated.loop(
      Animated.timing(anims.progressRotation, {
        toValue: 360,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const startMiniParticlesPulse = () => {
    particles.mini.forEach((particle, index) => {
      const angle = (index / particles.mini.length) * Math.PI * 2;
      const radius = 180;
      const xPos = Math.cos(angle) * radius;
      const yPos = Math.sin(angle) * radius;

      Animated.timing(particle.x, {
        toValue: xPos,
        duration: 0,
        useNativeDriver: false,
      }).start();

      Animated.timing(particle.y, {
        toValue: yPos,
        duration: 0,
        useNativeDriver: false,
      }).start();

      Animated.loop(
        Animated.sequence([
          Animated.timing(particle.opacity, {
            toValue: 1,
            duration: 600,
            useNativeDriver: false,
          }),
          Animated.timing(particle.scale, {
            toValue: 1.2,
            duration: 600,
            useNativeDriver: false,
          }),
          Animated.parallel([
            Animated.timing(particle.opacity, {
              toValue: 0,
              duration: 600,
              useNativeDriver: false,
            }),
            Animated.timing(particle.scale, {
              toValue: 0.5,
              duration: 600,
              useNativeDriver: false,
            }),
          ]),
        ]),
        { delay: index * 40 }
      ).start();
    });
  };

  const startTransitionAnimation = () => {
    particles.explosion.forEach((particle, index) => {
      const angle = (index / particles.explosion.length) * Math.PI * 2;
      const distance = Math.random() * 400 + 250;

      Animated.parallel([
        Animated.timing(particle.x, {
          toValue: Math.cos(angle) * distance,
          duration: 1000, // antes 1200 → transición más rápida
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }),
        Animated.timing(particle.y, {
          toValue: Math.sin(angle) * distance,
          duration: 1000,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }),
        Animated.sequence([
          Animated.timing(particle.opacity, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(particle.opacity, {
            toValue: 0,
            duration: 750,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(particle.scale, {
          toValue: 0.1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]).start();
    });

    Animated.parallel([
      Animated.timing(anims.sceneScale, {
        toValue: 1.3,
        duration: 1000, // antes 1200
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(anims.sceneRotate, {
        toValue: 360,
        duration: 1000,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();

    Animated.timing(anims.elementsOpacity, {
      toValue: 0,
      duration: 900, // antes 1000
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      setHideElements(true);
    });

    setShowTransition(true);
  };

  if (hideElements) return <HomeScreen />;

  return (
    <View style={styles.container}>
      {showTransition && <View style={styles.homeContainer}><HomeScreen /></View>}

      <View style={styles.gradientBg} />

      <Animated.View
        style={[
          styles.mainContainer,
          {
            opacity: anims.elementsOpacity,
            transform: [
              { scale: anims.sceneScale },
              {
                rotate: anims.sceneRotate.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}
      >
        {/* Logo centrado */}
        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity: anims.logoOpacity,
              transform: [
                { scale: anims.logoScale },
                { translateY: anims.logoY },
              ],
            },
          ]}
        >
          <Image
            source={require('../img/nt-el-reloj-circular.gif')}
            style={styles.logo}
          />
        </Animated.View>

        {/* Partículas diminutas */}
        {logoFixed && particles.mini.map((particle, index) => {
          const colorIndex = index % 2;
          const particleColor = colorIndex === 0 ? '#FFFFFF' : '#0052cc';
          return (
            <Animated.View
              key={`mini-${index}`}
              style={[
                styles.miniParticle,
                {
                  opacity: particle.opacity,
                  backgroundColor: particleColor,
                  transform: [
                    { translateX: particle.x },
                    { translateY: particle.y },
                    { scale: particle.scale },
                  ],
                },
              ]}
            />
          );
        })}

        {/* Partículas orbitales */}
        {logoFixed && particles.orbit.map((particle, index) => {
          const angle = (index / particles.orbit.length) * Math.PI * 2;
          const radius = 140;
          const xPos = Math.cos(angle) * radius;
          const yPos = Math.sin(angle) * radius;

          return (
            <Animated.View
              key={`orbit-${index}`}
              style={[
                styles.orbitParticle,
                {
                  opacity: anims.progressOpacity,
                  backgroundColor: '#FFFFFF',
                  transform: [
                    {
                      rotate: anims.progressRotation.interpolate({
                        inputRange: [0, 360],
                        outputRange: ['0deg', '360deg'],
                      }),
                    },
                    { translateX: xPos },
                    { translateY: yPos },
                  ],
                },
              ]}
            />
          );
        })}

        {/* Anillo */}
        {logoFixed && (
          <Animated.View
            style={[styles.orbitRing, { opacity: anims.progressOpacity }]}
          />
        )}

        {/* Partículas de explosión */}
        {showTransition && particles.explosion.map((particle, index) => (
          <Animated.View
            key={`explosion-${index}`}
            style={[
              styles.particle,
              {
                opacity: particle.opacity,
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                transform: [
                  { translateX: particle.x },
                  { translateY: particle.y },
                  { scale: particle.scale },
                ],
              },
            ]}
          />
        ))}
      </Animated.View>

      {/* Contador */}
      {logoFixed && !showTransition && progress < 100 && (
        <Animated.View
          style={[
            styles.percentContainer,
            { opacity: anims.elementsOpacity },
          ]}
        >
          <Text style={styles.percentText}>{Math.round(progress)}%</Text>
          <Text style={styles.loadingText}>Cargando...</Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  gradientBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0a1e47',
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    width: '100%',
    height: '100%',
  },
  homeContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  logoContainer: {
    zIndex: 3,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  orbitRing: {
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    position: 'absolute',
    zIndex: 1,
  },
  orbitParticle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    position: 'absolute',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10,
    zIndex: 2,
  },
  miniParticle: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    position: 'absolute',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 6,
    zIndex: 2,
  },
  particle: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    zIndex: 4,
  },
  percentContainer: {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
    zIndex: 5,
  },
  percentText: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  loadingText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 8,
    fontWeight: '500',
  },
});
