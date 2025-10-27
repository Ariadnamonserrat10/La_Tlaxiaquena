import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ConfiguracionScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Configuración</Text>

      {/* Preferencias */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>Preferencias</Text>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Notificaciones")}>
          <Ionicons name="notifications-outline" size={22} color="#5B4CCC" />
          <Text style={styles.text}>Notificaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Apariencia")}>
          <Ionicons name="color-palette-outline" size={22} color="#5B4CCC" />
          <Text style={styles.text}>Apariencia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Idioma")}>
          <Ionicons name="language-outline" size={22} color="#5B4CCC" />
          <Text style={styles.text}>Idioma</Text>
        </TouchableOpacity>
      </View>

      {/* Legal */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>Legal</Text>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Política de Privacidad")}>
          <Ionicons name="document-text-outline" size={22} color="#5B4CCC" />
          <Text style={styles.text}>Política de privacidad</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Términos y Condiciones")}>
          <Ionicons name="newspaper-outline" size={22} color="#5B4CCC" />
          <Text style={styles.text}>Términos y condiciones</Text>
        </TouchableOpacity>
      </View>

      {/* Soporte */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>Soporte</Text>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Contactar Soporte")}>
          <Ionicons name="headset-outline" size={22} color="#5B4CCC" />
          <Text style={styles.text}>Contactar soporte</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Preguntas Frecuentes")}>
          <Ionicons name="help-circle-outline" size={22} color="#5B4CCC" />
          <Text style={styles.text}>Preguntas frecuentes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 10 },
  titulo: { fontSize: 26, fontWeight: "bold", marginVertical: 10 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginVertical: 8,
    elevation: 3,
  },
  subtitulo: { fontWeight: "bold", fontSize: 18, marginBottom: 5 },
  item: { flexDirection: "row", alignItems: "center", paddingVertical: 10 },
  text: { fontSize: 16, marginLeft: 10 },
});
