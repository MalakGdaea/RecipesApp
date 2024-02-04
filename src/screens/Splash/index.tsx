import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import styles from './styles'
import Button from "../../components/Button";
import RootStackParamList from "../../types/RootStackParamList";
import { StackNavigationProp } from "@react-navigation/stack";

type SplashNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;
type SplashProps = {
    navigation: SplashNavigationProp
}

const Splash = ({ navigation }: SplashProps) => {

    return (
        <ImageBackground style={styles.background} source={require('../../../assets/splash.png')}>
            <View style={styles.container}>
                <Image source={require('../../../assets/hatIcon.png')} style={styles.logo} />
                <Text style={styles.title}>100k+ Premium Recipes</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.bigText}>Get</Text>
                <Text style={styles.bigText}>Cooking</Text>
                <Text style={styles.smallText}>Simple way to find tasty recipes</Text>
                <Button onPress={() => navigation.navigate('Home')}>Start Cooking</Button>
            </View>
        </ImageBackground>
    )
}

export default React.memo(Splash);