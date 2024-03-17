import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Student = (props) => {
    return(
        <View style={styles.container}>
            <Text>ID: {props.id}</Text>
            <Text>NAME: {props.name}</Text>
            <Text>EMAIL: {props.email}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Student;