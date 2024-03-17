import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Student from "../../components/Lab1_demo";

const Demo_Lab1 = () =>{
    return(
    <View style={styles.container}>
        <Student id='PD06976' name='Nguyen Trung' email='nguyentrung@fpt.edu.vn'/>
        <Student id='PD07834' name='Tuong Vy' email='tuongvy@fpt.edu.vn'/>
        <Student id='PD05636' name='Toan Nguyen' email='toannguyen@fpt.edu.vn'/>
        <Student id='PD08734' name='Hoang Van' email='hoangvan@fpt.edu.vn'/>
        <Student id='PD09054' name='Tham Hoa' email='thamhoa@fpt.edu.vn'/>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Demo_Lab1;
