import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGray,
        borderRadius: 12,
        padding: 10,
        width: width * 0.4,
        height: width * 0.48,
        marginTop: 65,
        marginRight: 16,
        position: 'relative',
    },
    title: {
        color: colors.gray,
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3.5,
    },
    dishImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: -60,
    },
    footer: {
        alignItems: 'flex-start',
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    footerText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: colors.gray,
    }
})

export default styles;