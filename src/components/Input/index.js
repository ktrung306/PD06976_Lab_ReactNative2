import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

const Input = ({label, placeholder, text, onChangeText}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    value={text} onChange={onChangeText}
                    placeholder={placeholder} 
                    style={styles.input} 
                    />
            </View>
        </View>
    );
};
export default Input;