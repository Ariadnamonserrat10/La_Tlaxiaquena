import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default function PoliticaPrivacidadScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Política de Privacidad</Text>
      <Text style={styles.text}>
        Tu privacidad es importante para nosotros. Esta política explica cómo
        recopilamos, usamos y protegemos tus datos personales dentro de la
        aplicación.
      </Text>
      <Text style={styles.text}>
        - No compartimos tu información con terceros sin tu consentimiento.{"\n"}
        - Solo usamos los datos para mejorar la experiencia del usuario.{"\n"}
        - Puedes solicitar la eliminación de tus datos en cualquier momento.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  text: { fontSize: 16, color: "#333", marginBottom: 10 },
});
