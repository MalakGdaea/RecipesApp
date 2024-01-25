import React from "react";
import { TouchableOpacity, Text, Image, GestureResponderEvent } from "react-native";
import styles from './styles'

interface ButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    children: React.ReactNode;
}

const Button = ({ children, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{children}</Text>
            <Image source={require('../../../assets/rightArrow.png')} style={styles.icon} />
        </TouchableOpacity>
    )
}

export default React.memo(Button);