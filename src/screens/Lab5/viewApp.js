// B4
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Tang, Giam } from './actions'

const GD = () => {
    const count = useSelector(state => state.dem);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Đếm: {count}</Text>
            <View style={styles.buttonContainer}>
                <Button title='Tăng giá trị' onPress={() => dispatch(Tang())} style={styles.button} />
                <Button title='Giảm giá trị' onPress={() => dispatch(Giam())} style={styles.button} />
            </View>
        </View>
    )
}

export default GD

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        marginBottom: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%'
    },
    button: {
        width: '40%' // You can adjust the width as per your preference
    }
})
