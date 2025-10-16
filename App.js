import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplishScreen from './src/Pages/SplishScreen';
import HomeScreen from './src/Pages/HomeScreen';
import NewsDetailScreen from './src/Pages/NewsDetailsScreen';
import RadioScreen from './src/Components/RadioScreen';
// Creamos la instancia del stack navigator
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // NavigationContainer envuelve toda la app y habilita la navegación
    <NavigationContainer>
      {/* Stack.Navigator define que vamos a navegar en un stack de pantallas */}
      <Stack.Navigator
        screenOptions={{ headerShown: false }}// Oculta la barra superior de todas las pantallas
      >
        {/* Definimos cada pantalla del stack */}
        <Stack.Screen name="Splash" component={SplishScreen} // Componente que se renderiza
        />
        <Stack.Screen name="Home" component={HomeScreen}
        />
        <Stack.Screen name="NewsDetail" component={NewsDetailScreen} options={{ detachPreviousScreen: false }} // Evita que HomeScreen se recargue al regresar desde NewsDetail
        />
        <Stack.Screen name="Radio" component={RadioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

