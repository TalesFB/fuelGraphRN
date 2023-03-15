import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Home } from "./src/screens/Home";
import { Loading } from "./src/components/Loading";

import theme from "./src/global/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';

export default function App() {
  const Tab = createBottomTabNavigator();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  function HomeScreen() {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />
        <Home />
      </ThemeProvider>
    );
  }

  function AddScreen() {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />
        <Home />
      </ThemeProvider>
    );
  }

  function ResumeScreen() {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />
        <Home />
      </ThemeProvider>
    );
  }

  if (!fontsLoaded) return <Loading />;

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Lista" component={HomeScreen} />
        <Tab.Screen name="Adicionar" component={AddScreen} />
        <Tab.Screen name="Resumo" component={ResumeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
