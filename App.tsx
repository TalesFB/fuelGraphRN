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
import { Register } from "./src/screens/Register";
import { Resume } from "./src/screens/Resume";
import { Loading } from "./src/components/Loading";

import theme from "./src/global/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, AntDesign, Octicons  } from '@expo/vector-icons';

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
        <Register />
      </ThemeProvider>
    );
  }

  function ResumeScreen() {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />
        <Resume />
      </ThemeProvider>
    );
  }

  if (!fontsLoaded) return <Loading />;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: `${theme.colors.tabBackground}`,
            height:90,
            borderTopColor:`${theme.colors.tabBackground}`,
          },
        }}
      >
        <Tab.Screen
          name="Lista"
          component={HomeScreen}
          options={{ tabBarIcon: ({ focused }) => <Feather  name="list" size={24} color="white" /> }}
        />
        <Tab.Screen
          name="Adicionar"
          component={AddScreen}
          options={{ tabBarIcon: ({ focused }) => <AntDesign name="pluscircle" size={44} color="white" />}}
        />
        <Tab.Screen
          name="Resumo"
          component={ResumeScreen}
          options={{ tabBarIcon: ({ focused }) => <Octicons name="graph" size={24} color="white" /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
