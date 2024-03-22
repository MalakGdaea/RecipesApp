import Recipe from "./Recipe";

type RootStackParamList = {
    Splash: undefined,
    Home: undefined,
    Search: undefined,
    RecipeDetails: { item: Recipe },
}
export default RootStackParamList;