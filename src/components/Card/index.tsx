import React from "react";
import { View, Text, Image, ViewStyle, TouchableOpacity } from "react-native";
import styles from "./styles";
import colors from "../../constants/colors";

type CardProps = {
    title: string,
    image: string,
    time: string,
    style?: ViewStyle,
    onPress: () => void,
}

const Card = ({ title, image, time, style, onPress }: CardProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <View style={styles.column}>
                <Image style={styles.dishImage} source={{ uri: image }} />
                <Text numberOfLines={3} style={styles.title}>{title}</Text>
            </View>
            {(time && time > '0') ? <View style={[styles.column, styles.footer]}>
                <Text style={[styles.footerText, { color: colors.lightGray2 }]}>Time</Text>
                <Text style={styles.footerText}>{time} min</Text>
            </View> : <View></View>}
        </TouchableOpacity>
    )
};

export default React.memo(Card);