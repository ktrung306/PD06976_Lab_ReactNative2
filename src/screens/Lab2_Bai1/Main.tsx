import { StyleSheet, View } from "react-native";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";
export const Lab2_Bai1 = () => {
    return(
        <View style ={Styles.container}>
            <Header/>
            <Body/>
            <Footer/>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 250
    }
});