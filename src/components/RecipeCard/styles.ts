import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 10,
        marginVertical: 16,
        padding: 10,
        width: width * 0.7,
        marginTop: 40,
        marginRight: 16,
        // ios
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.59,
        // android
        elevation: 5,
    },
    title: {
        color: colors.gray,
        fontSize: 14,
        fontWeight: 'bold',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    authorImage: {
        width: 25,
        height: 25,
        borderRadius: 20,
        marginRight: 10,
    },
    footerText: {
        fontSize: 11,
        color: colors.lightGray2,
    },
    icon: {
        width: 17,
        height: 17,
        marginRight: 5,
    },
    dishImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginTop: -40,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
})

export default styles;