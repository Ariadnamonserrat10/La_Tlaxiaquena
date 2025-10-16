import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function IdiomaScreen() {
  const [idioma, setIdioma] = useState("Español");

  const idiomas = ["Español", "Inglés", "Francés", "Portugués"];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Idioma</Text>
      {idiomas.map((item) => (
        <TouchableOpacity
          key={item}
          style={[
            styles.item,
            { backgroundColor: idioma === item ? "#e0e0e0" : "#fff" },
          ]}
          onPress={() => setIdioma(item)}
        >
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.seleccion}>Idioma seleccionado: {idioma}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  text: { fontSize: 18 },
  seleccion: { marginTop: 20, fontSize: 16, color: "#333" },
});
