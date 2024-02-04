import React from 'react';
import Recipe from './types/Recipe';

export const RecipesContext = React.createContext<{
    recipes: Recipe[],
    setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>
}>({ recipes: [], setRecipes: () => { } });

export const HealthyRecipesContext = React.createContext<{
    healthyRecipes: Recipe[],
    setHealthyRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>
}>({ healthyRecipes: [], setHealthyRecipes: () => { } });

