import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

type RatingProps = {
    rating: number;
}

const Rating = ({ rating }: RatingProps) => {
    const starsNumber = [1, 2, 3, 4, 5];

    const renderStarts = () => {
        return starsNumber.map((starsNum) => {
            if (starsNum <= Math.round(rating)) {
                return (
                    <Image key={starsNum} style={styles.icon} source={require('../../../assets/star.png')} />
                )
            }
            return (
                <Image key={starsNum} style={styles.icon} source={require('../../../assets/emptyStar.png')} />
            )
        })
    }

    return (
        <View style={styles.container}>
            {renderStarts()}
        </View>
    )
};

export default React.memo(Rating);