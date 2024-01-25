import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from './styles'

type BackButtonProps = {
    goBack: () => void
}

const BackButton = ({ goBack }: BackButtonProps) => {
    return (
        <TouchableOpacity onPress={goBack}>
            <Image style={styles.icon} source={require("../../../assets/back.png")} />
        </TouchableOpacity >
    )
}

export default React.memo(BackButton);