import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        flex: 1,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.darkGray,
        borderRadius: 8,
        padding: 8,
        marginVertical: 4,
    },
    key: {
        fontSize: 12,
        textTransform: 'capitalize',
        color: colors.black,
    },
    value: {
        fontSize: 12,
        color: colors.lightGray2,
    },
    instruction: {
        flexDirection: "row",
        marginBottom: 15,
        alignItems: 'center',
    },
    index: {
        fontSize: 20,
        color: colors.gray1,
        marginRight: 16,
    },
    instructionText: {
        flex: 1,
        fontSize: 14,
        color: colors.black,
    }
})

export default styles;

