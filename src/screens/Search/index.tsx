import React from "react";
import { SafeAreaView } from "react-native";
import SearchInput from "../../components/SearchInput";
import styles from './styles'

const Search = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SearchInput />
        </SafeAreaView>
    )
}

export default React.memo(Search);