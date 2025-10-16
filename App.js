<<<<<<< HEAD
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
=======
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplishScreen from './src/Pages/SplishScreen';
import HomeScreen from './src/Pages/HomeScreen';
import NewsDetailScreen from './src/Pages/NewsDetailsScreen';
import NotificationsScreen from './src/Pages/NotificationsScreen';

const Stack = createNativeStackNavigator();
>>>>>>> 9b273b5ef89f7eea051e3d24358492845208fa91

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="Configuración">
        <Stack.Screen name="Configuración" component={ConfiguracionScreen} />
        <Stack.Screen name="Notificaciones" component={NotificacionesScreen} />
      
        <Stack.Screen name="Idioma" component={IdiomaScreen} />
        <Stack.Screen name="Política de Privacidad" component={PoliticaPrivacidadScreen} />
        <Stack.Screen name="Términos y Condiciones" component={TerminosScreen} />
        <Stack.Screen name="Contactar Soporte" component={SoporteScreen} />
        <Stack.Screen name="Preguntas Frecuentes" component={PreguntasScreen} />
=======
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplishScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
>>>>>>> 9b273b5ef89f7eea051e3d24358492845208fa91
      </Stack.Navigator>
    </NavigationContainer>
  );
}
