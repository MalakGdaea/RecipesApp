import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RootStackParamList from "../../types/RootStackParamList";
import SearchInput from "../../components/SearchInput";
import styles from './styles'
import Title from "../../components/Title";
import Categories from "../../components/Categories";
import RecipeCard from "../../components/RecipeCard";
import { FlatList } from "react-native";
import Card from "../../components/Card";

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeProps = {
    navigation: HomeNavigationProp
}

const Home = ({ navigation }: HomeProps) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <SafeAreaView style={styles.container}>
            <SearchInput pressable onPress={() => navigation.navigate('Search')} />
            <Title titleText="Featured Recipes" style={{ marginTop: 20 }} />
            <FlatList
                horizontal
                data={[1, 2, 3]}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index }) => (
                    <RecipeCard title="Steak with tomato sauce and bulgar rice." time={'20 min'} rating={3.6} style={index === 0 ? { marginLeft: 3 } : {}}
                        author={{ name: 'James Milner', image: 'https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg&ga=GA1.2.1100847543.1704207944&semt=ais' }} />
                )}
            />
            <Categories categories={['All', 'Trending']} selectedCategory={selectedCategory} onCategoryPress={setSelectedCategory} />
            <FlatList
                horizontal
                data={[1, 2, 3]}
                showsHorizontalScrollIndicator={false}
                renderItem={() => (
                    <Card title="Steak with tomato sauce and bulgar rice." time={'20 min'} />
                )}
            />
        </SafeAreaView>
    )
}

export default React.memo(Home);