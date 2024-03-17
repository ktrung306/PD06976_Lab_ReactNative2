import { StyleSheet, Text, View } from "react-native";
import React from "react";


export const Header = () => {
    console.log('re-render header');
    return(
        <View>
            <Text style={styles.text}>Header</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
      fontSize: 20, // Đặt kích thước văn bản là 20
    },

});