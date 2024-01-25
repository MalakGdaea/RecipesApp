import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
    },
    icon: {
        width: 26,
        height: 26,
        marginLeft: 16,
    }
})

export default styles;