import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { UserProvider } from './UserContext';

// Import screens
import SplashScreen from './screens/SplashScreen';
import EnterNameScreen from './screens/EnterNameScreen';
import HomeScreen from './screens/HomeScreen';
import LevelsScreen from './screens/LevelsScreen';
import MediumLevelsScreen from './screens/MediumLevelsScreen';
import HardLevelsScreen from './screens/HardLevelsScreen';
import DrawingPage from './screens/DrawingPage';
import HintPage from './screens/HintPage';
import Gallery from './screens/Gallery';
import AboutUs from './screens/AboutUs';

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Cambay-Regular": require("./assets/fonts/Cambay-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Optionally return a loading component
  }

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="EnterNameScreen" component={EnterNameScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LevelsScreen" component={LevelsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MediumLevelsScreen" component={MediumLevelsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HardLevelsScreen" component={HardLevelsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="DrawingPage" component={DrawingPage} options={{ headerShown: false }} />
          <Stack.Screen name="HintPage" component={HintPage} options={{ headerShown: false }} />
          <Stack.Screen name="Gallery" component={Gallery} options={{ headerShown: false }} />
          <Stack.Screen name="AboutUs" component={AboutUs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
