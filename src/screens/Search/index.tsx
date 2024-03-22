import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import SearchInput from "../../components/SearchInput";
import styles from './styles'
import Card from "../../components/Card";
import { RecipesContext } from "../../contexts";
import Recipe from "../../types/Recipe";
import RootStackParamList from "../../types/RootStackParamList";
import { StackNavigationProp } from "@react-navigation/stack";

type SearchNavigationProp = StackNavigationProp<RootStackParamList, 'Search'>;
type SearchProps = {
    navigation: SearchNavigationProp
}

const Search = ({ navigation }: SearchProps) => {
    const { recipes } = useContext(RecipesContext);
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        if (keyword.length > 2) {
            const updatedFilteredRecipes = recipes?.filter((recipe) => recipe?.name?.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
            setFilteredRecipes(updatedFilteredRecipes);
        } else {
            setFilteredRecipes([]);
        }
    }, [keyword]);

    return (
        <SafeAreaView style={styles.container}>
            <SearchInput autoFocus onChangeText={setKeyword} />
            <FlatList
                data={filteredRecipes}
                numColumns={2}
                keyExtractor={item => String(item?.id)}
                renderItem={({ item }) => (
                    <Card
                        title={item?.name}
                        time={item?.cook_time_minutes}
                        image={item?.thumbnail_url}
                        onPress={() => navigation.navigate('RecipeDetails', { item })} />
                )} />
        </SafeAreaView>
    )
}

export default React.memo(Search);