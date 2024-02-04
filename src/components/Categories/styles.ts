import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    item: {
        fontSize: 12,
        color: colors.green,
        padding: 6,
        paddingHorizontal: 12,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    itemContainer: {
        marginRight: 8,
        marginVertical: 10,
    },
    selectedCategory: {
        color: colors.white,
        backgroundColor: colors.green,
        borderRadius: 10,
    },
});

export default styles