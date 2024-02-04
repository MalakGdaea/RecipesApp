import React from "react";
import { View, Text, Image, ViewStyle } from "react-native";
import styles from "./styles";
import colors from "../../constants/colors";

type CardProps = {
    title: string,
    image: string,
    time: string,
    style?: ViewStyle,
}

const Card = ({ title, image, time, style }: CardProps) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.column}>
                <Image style={styles.dishImage} source={{ uri: image }} />
                <Text numberOfLines={3} style={styles.title}>{title}</Text>
            </View>
            {(time && time > '0') ? <View style={[styles.column, styles.footer]}>
                <Text style={[styles.footerText, { color: colors.lightGray2 }]}>Time</Text>
                <Text style={styles.footerText}>{time} min</Text>
            </View> : <View></View>}
        </View>
    )
};

export default React.memo(Card);