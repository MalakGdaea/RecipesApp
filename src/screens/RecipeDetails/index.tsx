import React from "react";
import styles from './styles'
import Title from "../../components/Title";
import { View, Image, Text, ScrollView } from "react-native";
import Recipe from "../../types/Recipe";
import NutritionInfo from "../../interfaces/NutritionInfo";

type RecipeDetailProps = {
    route?: {
        params: {
            item: Recipe;
        };
    }
}

const RecipeDetail = ({ route }: RecipeDetailProps) => {
    const { item } = route?.params || {};
    const nutrition: NutritionInfo | undefined = item?.nutrition;
    delete nutrition?.updated_at;
    const instructions = item?.instructions || [];

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={styles.image} source={{ uri: item?.thumbnail_url }} />
                <Title titleText={item?.name} style={{ marginTop: 20, marginBottom: 32 }} />
                {nutrition && Object.entries(nutrition).map(([key, value]) => (
                    <View style={styles.row} key={key}>
                        <Text style={styles.key}>{key}</Text>
                        <Text style={styles.value}>{value}</Text>
                    </View>
                ))}

                <Title titleText="Instructions" style={{ marginTop: 28, marginBottom: 25 }} />
                {instructions.length ? instructions.map((instruction, index) => (
                    <View style={styles.instruction} key={instruction.id}>
                        <Text style={styles.index}>{index + 1}</Text>
                        <Text style={styles.instructionText}>{instruction.display_text}</Text>
                    </View>
                )) : <Text>No instructions found!</Text>}
            </ScrollView>
        </View>
    )
}

export default React.memo(RecipeDetail);