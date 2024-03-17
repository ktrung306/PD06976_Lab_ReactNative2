import { FC, memo } from "react";
import { Image, StyleSheet, Text, View, ViewStyle } from "react-native";
import { UserType } from "./Main";

type HeaderType = {
    user: UserType;
};

export const Header: FC<HeaderType> = memo(props =>{
    const {user} = props;
    console.log('re-render header');
    return (
        <View style={styles.container}>
            <Image
                resizeMode="center"
                style={styles.avatar}
                source={{uri: user.avatar}}/>
            <View>
                <Text>Chào ngày mới</Text>
                <Text style={styles.name}>{user.name}</Text>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontWeight: 'bold',
    },
});

