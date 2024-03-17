import { StyleSheet, Text, View } from "react-native";

export const Body = () => {
    console.log('re-render body');
    return(
        <View>
            <Text style={styles.text}>Body</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 20, 
    },

});