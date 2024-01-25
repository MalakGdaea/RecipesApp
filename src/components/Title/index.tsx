import React from "react";
import { Text, TextStyle } from "react-native";
import styles from "./styles";

type TitleProps = {
    titleText: string;
    style?: TextStyle
}

const Title = ({ titleText, style }: TitleProps) => {
    return (
        <Text style={[styles.title, style]}>{titleText}</Text>
    )
};

Title.defaultProps = {
    titleText: 'Title',
}


export default React.memo(Title);