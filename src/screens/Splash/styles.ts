import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    container: {
        padding: 15,
    },
    title: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
    },
    bigText: {
        color: colors.white,
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    smallText: {
        color: colors.white,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 45,
        marginTop: 20,
    }
})

export default styles;

