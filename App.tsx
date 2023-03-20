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
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

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
            backgroundColor: `${theme.colors.background}`,
            height: 80,
            paddingBottom: 20,
            borderTopColor: `${theme.colors.tabBackground}`,
          },
        }}
      >
        <Tab.Screen
          name="Lista"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                <Feather
                  name="list"
                  size={25}
                  color={`${focused ? "white" : theme.colors.grayTextPlacehoder}`}
                />
                <Text
                  style={{
                    color: `${focused ? "white" : theme.colors.grayTextPlacehoder}`,
                    fontSize: 10,
                  }}
                >
                  Lista
                </Text>
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Adicionar"
          component={AddScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="pluscircle"
                size={50}
                color={`${focused ? "white" : theme.colors.grayTextPlacehoder}`}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Resumo"
          component={ResumeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                <MaterialCommunityIcons
                  name="chart-arc"
                  size={30}
                  color={`${focused ? "white" : theme.colors.grayTextPlacehoder}`}
                />
                <Text
                  style={{
                    color: `${focused ? "white" : theme.colors.grayTextPlacehoder}`,
                    fontSize: 10,
                  }}
                >
                  Resumo
                </Text>
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
