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

const SearchInput = ({ showSearchIcon, pressable, onPress, style, ...props }: SearchInputProps & { [key: string]: unknown }) => {
    const renderInput = () => (
        <View style={[styles.container, style]}>
            {showSearchIcon ? (
                <Image style={styles.icon} source={require('../../../assets/magnifyingGlass.png')} />
            )
                : null}
            <TextInput {...props} editable={!pressable} placeholderTextColor={colors.lightGray} style={styles.input} />
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