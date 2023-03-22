import { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../../screens/Home";
import { Register } from "../../screens/Register";
import { Resume } from "../../screens/Resume";
import { Login } from "../../screens/Login";

import theme from "../../global/styles/theme";

import { AuthvehicleContext } from "../../context/AuthVehicleContext";

export function NavigateComponent() {
  const { plateCar, setPlateCar }: any = useContext(AuthvehicleContext);

  const Tab = createBottomTabNavigator();

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

  return plateCar ? (
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
  ) : (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Login handlePlate={setPlateCar} />
    </ThemeProvider>
  );
}
