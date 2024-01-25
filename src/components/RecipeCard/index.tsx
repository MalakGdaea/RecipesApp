import React from "react";
import { View, Text, Image, ViewStyle } from "react-native";
import styles from "./styles";
import Author from "../../types/Author";
import Rating from "../Rating";

type RecipeCardProps = {
    title: string,
    image: string,
    author: Author,
    rating: number,
    time: string,
    style: ViewStyle,
}

const RecipeCard = ({ title, image, author, rating, time, style }: RecipeCardProps) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.row}>
                <View style={{ flex: 1 }}>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>
                    <Rating rating={rating} />
                </View>
                <Image style={styles.dishImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJ1bTXcfEScZ0qC-Udl2G59lDQS8OGr7h0Q&usqp=CAU' }} />
            </View>
            <View style={styles.footer}>
                <View style={styles.row}>
                    <Image style={styles.authorImage} source={{ uri: author?.image }} />
                    <Text style={styles.footerText}>By {author?.name ?? 'unKnown'}</Text>
                </View>
                <View style={styles.row}>
                    <Image style={styles.icon} source={require('../../../assets/timer.png')} />
                    <Text style={styles.footerText}>{time}</Text>
                </View>
            </View>
        </View>
    )
};

export default React.memo(RecipeCard);