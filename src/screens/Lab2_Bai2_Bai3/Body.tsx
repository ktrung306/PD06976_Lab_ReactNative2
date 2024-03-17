import React, { FC, memo, useState } from "react";
import { Button, TextInput, View, StyleSheet, ToastAndroid } from "react-native";
import { UserType } from "./Main";

type BodyType = {
    onUpdateInfor: (user: UserType) => void;
    onClickChangeBgFooter: () => void;
};

export const Body: FC<BodyType> = memo(props => {
    const {onUpdateInfor, onClickChangeBgFooter} = props;
    const [name, setName] = useState('');
    const [linkImage, setLinkImage] = useState('');

    const handleUpdateInfo = () => {
        if (name.length > 0 && linkImage.length > 0) {
            onUpdateInfor({name, avatar: linkImage});  
        } else {
            ToastAndroid.show('Không được để trống', ToastAndroid.SHORT);
        }
  };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nhập tên..."
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Nhập link ảnh..."
                value={linkImage}
                onChangeText={setLinkImage}
            />
            <View style={styles.buttonContainer}>
            <Button title="Cập nhật thông tin" onPress={handleUpdateInfo} />
            <View style={styles.buttonSpace} />
            <Button title="Đổi màu Footer" onPress={onClickChangeBgFooter} />
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '80%',
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
    },
    buttonSpace: {
        marginTop: 10,
    },
});

export default Body;
