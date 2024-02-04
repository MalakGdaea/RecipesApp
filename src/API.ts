import axios from "axios";
import Recipe from "./types/Recipe";

export const getRecipes = async (tags = '', size = '20'): Promise<Recipe[]> => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
            from: '0',
            size: size,
            tags
        },
        headers: {
            'X-RapidAPI-Key': '29bf268e52msh417d363771475a8p1bbb35jsneda14d834b75',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };
    const response = await axios.request(options);
    return response.data.results;
}