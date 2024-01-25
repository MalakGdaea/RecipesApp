import React from "react";
import { View, Image, TextInput, ViewStyle, Pressable } from "react-native";
import styles from './styles'
import colors from "../../constants/colors";

interface SearchInputProps {
    showSearchIcon?: boolean;
    placeholder?: string;
    pressable?: boolean;
    onPress?: () => void;
    style?: ViewStyle;
}

const SearchInput = ({ showSearchIcon, placeholder, pressable, onPress, style }: SearchInputProps) => {
    const renderInput = () => (
        <View style={[styles.container, style]}>
            {showSearchIcon ? (
                <Image style={styles.icon} source={require('../../../assets/magnifyingGlass.png')} />
            )
                : null}
            <TextInput editable={!pressable} placeholderTextColor={colors.lightGray} style={styles.input} placeholder={placeholder} />
        </View>
    )
    if (pressable) {
        return (
            <Pressable onPress={onPress}>
                {renderInput()}
            </Pressable>
        )
    }
    return renderInput();
}

SearchInput.defaultProps = {
    placeholder: 'Search recipe',
    showSearchIcon: true,
    pressable: false,
}

export default React.memo(SearchInput);