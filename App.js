import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ConfiguracionScreen from "./screens/ConfiguracionScreen";
import NotificacionesScreen from "./screens/NotificacionesScreen";
import IdiomaScreen from "./screens/IdiomaScreen";
import PoliticaPrivacidadScreen from "./screens/PoliticaPrivacidadScreen";
import TerminosScreen from "./screens/TerminosScreen";
import SoporteScreen from "./screens/SoporteScreen";
import PreguntasScreen from "./screens/PreguntasScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Configuración">
        <Stack.Screen name="Configuración" component={ConfiguracionScreen} />
        <Stack.Screen name="Notificaciones" component={NotificacionesScreen} />
      
        <Stack.Screen name="Idioma" component={IdiomaScreen} />
        <Stack.Screen name="Política de Privacidad" component={PoliticaPrivacidadScreen} />
        <Stack.Screen name="Términos y Condiciones" component={TerminosScreen} />
        <Stack.Screen name="Contactar Soporte" component={SoporteScreen} />
        <Stack.Screen name="Preguntas Frecuentes" component={PreguntasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
