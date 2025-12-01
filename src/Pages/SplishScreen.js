import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Image,
  Easing,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

/* --------------------------------------------------
      ESTRELLAS FIJAS
-------------------------------------------------- */
const createStars = (count) =>
  Array.from({ length: count }, () => {
    const isGold = Math.random() < 0.45;
    const size = 1 + Math.random() * 4;

    return {
      top: Math.random() * height,
      left: Math.random() * width,
      size,
      color: isGold ? "#FFD700" : "#FFFFFF",
      opacity: new Animated.Value(Math.random()),
    };
  });

export default function SplashScreen() {
  const navigation = useNavigation();
  const stars = useMemo(() => createStars(240), []);

  const nebulaOpacity = useMemo(() => new Animated.Value(0), []);
  const logoOpacity = useMemo(() => new Animated.Value(0), []);
  const logoScale = useMemo(() => new Animated.Value(0.5), []);

  const gravityDistortion = useMemo(() => new Animated.Value(0), []);
  const pulseScale = useMemo(() => new Animated.Value(0), []);
  const pulseOpacity = useMemo(() => new Animated.Value(0), []);

  const sceneOpacity = useMemo(() => new Animated.Value(1), []);
  const sceneScale = useMemo(() => new Animated.Value(1), []);

  const [hideUI, setHideUI] = useState(false);

  /* --------------------------------------------------
            PARPADEO ESTRELLAS
  -------------------------------------------------- */
  const startTwinkle = () => {
    stars.forEach((star) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(star.opacity, {
            toValue: 0.1 + Math.random() * 0.8,
            duration: 800 + Math.random() * 900,
            delay: Math.random() * 600,
            useNativeDriver: true,
          }),
          Animated.timing(star.opacity, {
            toValue: 0.3,
            duration: 800 + Math.random() * 900,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });
  };

  /* --------------------------------------------------
            EFECTO PULSO ENERGÉTICO
  -------------------------------------------------- */
  const startPulse = () => {
    pulseScale.setValue(0);
    pulseOpacity.setValue(0.9);

    Animated.parallel([
      Animated.timing(pulseScale, {
        toValue: 3.5,
        duration: 1500,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(pulseOpacity, {
        toValue: 0,
        duration: 1500,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  };

  /* --------------------------------------------------
            LOGO + NEBULOSA
  -------------------------------------------------- */
  const startLogoAnimation = () => {
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1300,
        useNativeDriver: true,
      }),
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 1300,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(nebulaOpacity, {
        toValue: 0.55,
        duration: 1600,
        useNativeDriver: true,
      }),
    ]).start(() => {
      startPulse();
      startGravity();
    });
  };

  /* --------------------------------------------------
            GRAVEDAD
  -------------------------------------------------- */
  const startGravity = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(gravityDistortion, {
          toValue: 1,
          duration: 1100,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(gravityDistortion, {
          toValue: 0,
          duration: 1100,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    ).start();

    setTimeout(() => exitToHome(), 3500);
  };

  /* --------------------------------------------------
            SALIDA
  -------------------------------------------------- */
  const exitToHome = () => {
    Animated.parallel([
      Animated.timing(sceneOpacity, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(sceneScale, {
        toValue: 1.25,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setHideUI(true);
      navigation.replace("Home");
    });
  };

  /* --------------------------------------------------
            INICIO
  -------------------------------------------------- */
  useEffect(() => {
    startTwinkle();
    startLogoAnimation();
  }, []);

  if (hideUI) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        { opacity: sceneOpacity, transform: [{ scale: sceneScale }] },
      ]}
    >
      {/* NEBULOSA */}
      <Animated.View
        style={[
          styles.nebula,
          { opacity: nebulaOpacity, transform: [{ scale: 1.6 }] },
        ]}
      />

      {/* ESTRELLAS FIJAS */}
      {stars.map((star, idx) => (
        <Animated.View
          key={idx}
          style={[
            styles.star,
            {
              width: star.size,
              height: star.size,
              backgroundColor: star.color,
              opacity: star.opacity,
              top: star.top,
              left: star.left,
            },
          ]}
        />
      ))}

      {/* ONDA DE ENERGÍA (PULSO) */}
      <Animated.View
        style={[
          styles.pulse,
          {
            transform: [{ scale: pulseScale }],
            opacity: pulseOpacity,
          },
        ]}
      />

      {/* LOGO */}
      <Animated.View
        style={{
          opacity: logoOpacity,
          transform: [
            { scale: logoScale },
            {
              rotate: gravityDistortion.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "2deg"],
              }),
            },
          ],
        }}
      >
        <Image
          source={require("../img/Logo2.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </Animated.View>
  );
}

/* --------------------------------------------------
            ESTILOS
-------------------------------------------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000103ff",
    justifyContent: "center",
    alignItems: "center",
  },

  star: {
    position: "absolute",
    borderRadius: 10,
  },

  pulse: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: "rgba(255,255,255,0.3)",
  },

  nebula: {
    position: "absolute",
    width: width * 1.6,
    height: height * 1.6,
    backgroundColor: "rgba(120,150,255,0.35)",
    borderRadius: width,
  },

  logo: {
    width: 170,
    height: 170,
  },
});
