import React from "react";
import Splash from "./src/screens/Splash"
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import BackButton from "./src/components/BackButton";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShadowVisible: false }}>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerBackVisible: false, gestureEnabled: false }} />
        <Stack.Screen name="Search" component={Search} options={({ navigation }) => ({
          headerLeft: () => (
            <BackButton goBack={navigation.goBack} />
          ),
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

