import React from "react";
import Splash from "./src/screens/Splash"
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import BackButton from "./src/components/BackButton";
import { useState, useEffect } from "react";
import { getRecipes } from "./src/API";
import Recipe from "./src/types/Recipe";
import { RecipesContext, HealthyRecipesContext } from './src/contexts';


const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

export default function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [healthyRecipes, setHealthyRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    try {
      const recipes: Recipe[] = await getRecipes('', '15');
      setRecipes(recipes);
      const healthyRecipes: Recipe[] = await getRecipes('healthy', '5');
      setHealthyRecipes(healthyRecipes);
    } catch (e) {
      console.log("e => ", e);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      <HealthyRecipesContext.Provider value={{ healthyRecipes, setHealthyRecipes }}>
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
      </HealthyRecipesContext.Provider>
    </ RecipesContext.Provider>

  );
}

