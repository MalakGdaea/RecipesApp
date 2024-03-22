import { StackNavigationProp } from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from "react";
import RootStackParamList from "../../types/RootStackParamList";
import SearchInput from "../../components/SearchInput";
import styles from './styles'
import Title from "../../components/Title";
import Categories from "../../components/Categories";
import RecipeCard from "../../components/RecipeCard";
import { FlatList, View } from "react-native";
import Card from "../../components/Card";
import { HealthyRecipesContext, RecipesContext } from "../../../src/contexts";

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeProps = {
    navigation: HomeNavigationProp
}

const Home = ({ navigation }: HomeProps) => {
    const [selectedTag, setSelectedTag] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const { recipes } = useContext(RecipesContext);
    const { healthyRecipes } = useContext(HealthyRecipesContext);
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);

    useEffect(() => {
        const tagsList: string[] = [];
        recipes.forEach((recipe) => {
            recipe.tags.forEach((tag) => {
                if (!tagsList.includes(tag.name)) {
                    tagsList.push(tag.name);
                }
            });
        })
        setTags([...tagsList]);
    }, [recipes]);

    useEffect(() => {
        if (selectedTag) {
            const filteredItems = recipes.filter((recipe) => {
                const tag = recipe.tags.find(t => t?.name == selectedTag);
                return !!tag;
            })
            setFilteredRecipes(filteredItems);
        } else {
            setFilteredRecipes(recipes);
        }
    }, [selectedTag, recipes]);

    return (
        <View style={styles.container}>
            <SearchInput pressable onPress={() => navigation.navigate('Search')} />
            <Title titleText="Healthy Recipes" style={{ marginTop: 20 }} />
            <FlatList
                horizontal
                data={healthyRecipes}
                keyExtractor={item => String(item?.id)}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <RecipeCard title={item?.name}
                        time={item?.cook_time_minutes}
                        rating={item?.user_ratings?.score} style={index === 0 ? { marginLeft: 3 } : {}}
                        image={item?.thumbnail_url}
                        author={{ name: item.credits[0].name, image_url: item.credits[0].image_url }}
                        onPress={() => navigation.navigate('RecipeDetails', { item })} />
                )}
            />
            <Categories categories={tags} selectedCategory={selectedTag} onCategoryPress={setSelectedTag} />
            <FlatList
                horizontal
                data={filteredRecipes}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Card
                        title={item?.name}
                        time={item?.cook_time_minutes}
                        image={item?.thumbnail_url}
                        onPress={() => navigation.navigate('RecipeDetails', { item })} />
                )}
            />
        </View>
    )
}

export default React.memo(Home);