import { StyleSheet, Text, View } from "react-native";

export const Footer = () => {
    console.log('re-render footer');
    return(
        <View>
            <Text style={styles.text}>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 20, // Đặt kích thước văn bản là 20
    },

});