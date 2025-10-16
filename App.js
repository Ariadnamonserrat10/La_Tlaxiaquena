import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplishScreen from './src/Pages/SplishScreen';
import HomeScreen from './src/Pages/HomeScreen';
import NewsDetailScreen from './src/Pages/NewsDetailsScreen';
import RadioScreen from './src/Pages/RadioScreen';
import NotificationsScreen from './src/Pages/NotificationsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplishScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
          name="NewsDetail" 
          component={NewsDetailScreen} 
          options={{ detachPreviousScreen: false }}
        />
        <Stack.Screen name="Radio" component={RadioScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}