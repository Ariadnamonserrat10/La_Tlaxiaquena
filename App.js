import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NetInfo from '@react-native-community/netinfo';

// Pantallas principales
import SplishScreen from './src/Pages/SplishScreen';
import HomeScreen from './src/Pages/HomeScreen';
import NewsDetailScreen from './src/Pages/NewsDetailsScreen';
import RadioScreen from './src/Pages/RadioScreen';
import NotificationsScreen from './src/Pages/NotificationsScreen';

// Pantallas de configuración
import ConfiguracionScreen from './src/Pages/configuracionScreen';
import NotificacionesScreen from './src/Pages/NotificacionesScreen';
import IdiomaScreen from './src/Pages/IdiomaScreen';
import PoliticaPrivacidadScreen from './src/Pages/PoliticaPrivacidadScreen';
import TerminosScreen from './src/Pages/TerminosScreen';
import SoporteScreen from './src/Pages/SoporteScreen';
import PreguntasScreen from './src/Pages/PreguntasScreen';
import SocialScreen from './src/Pages/SocialScreen';

// Componente de banner de conexión
import ConnectionBanner from './src/Components/ConnectionBanner';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isConnected, setIsConnected] = React.useState(true);
  const [showConnectionMessage, setShowConnectionMessage] = React.useState(false);
  const [connectionMessage, setConnectionMessage] = React.useState('');
  const [shouldRefreshHome, setShouldRefreshHome] = React.useState(false);

  const API_BASE = 'http://192.168.0.105/Pruebas/wp-json/noticias/v1';

  // Escucha del estado de red
  React.useEffect(() => {
    let timeoutId = null;
    const unsubscribe = NetInfo.addEventListener(state => {
      const online = !!(state.isConnected && (state.isInternetReachable !== false));
      setIsConnected(online);

      if (!online) {
        setConnectionMessage('Sin conexión a internet');
        setShowConnectionMessage(true);
      } else {
        setConnectionMessage('Conexión restaurada');
        setShowConnectionMessage(true);
        // Trigger para recargar noticias en Home
        setShouldRefreshHome(true);
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setShowConnectionMessage(false);
        }, 2500);
      }
    });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Banner de conexión global - Solo aparece cuando no hay internet */}
      {showConnectionMessage && !isConnected && (
        <ConnectionBanner 
          message={connectionMessage}
          isError={true}
        />
      )}
      
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{ 
            headerShown: false,
            animation: 'none',
          }}
          initialRouteName="Splash"
        >
          {/* Pantallas principales */}
          <Stack.Screen name="Splash" component={SplishScreen} />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              params: {
                isConnected: isConnected,
                shouldRefresh: shouldRefreshHome,
              }
            }}
          />
          <Stack.Screen 
            name="NewsDetail" 
            component={NewsDetailScreen} 
            options={{ 
              animation: 'none',
            }}
          />
          <Stack.Screen name="Radio" component={RadioScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          {/* Pantallas de configuración */}
          <Stack.Screen name="Configuración" component={ConfiguracionScreen} />
          <Stack.Screen name="Notificaciones" component={NotificacionesScreen} />
          <Stack.Screen name="Idioma" component={IdiomaScreen} />
          <Stack.Screen name="Política de Privacidad" component={PoliticaPrivacidadScreen} />
          <Stack.Screen name="Términos y Condiciones" component={TerminosScreen} />
          <Stack.Screen name="Contactar Soporte" component={SoporteScreen} />
          <Stack.Screen name="Preguntas Frecuentes" component={PreguntasScreen} />
          <Stack.Screen name="Social" component={SocialScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}