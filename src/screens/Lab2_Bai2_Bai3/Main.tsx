import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Body from "./Body";

const colors = ['white', 'gray', 'yellow', 'red', 'blue', 'orange'];

export type UserType = {
    name: string;
    avatar: string;
};

export default function Lab2_Bai2_Bai3() {
    const [user, setUser] = useState<UserType>({
        name: 'chưa có tên',
        avatar: 
        'https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg',
    });
    const [lastTimeUpdate, setLastTimeUpdate] = useState(
        'Bạn chưa cập nhật thông tin',
    );
    const [footerColor, setFooterColor] = useState(colors[0]);

    //Cập nhật thông tin cho tài khoản
    const handleUpdateInfor = useCallback((user: UserType) => {
        setUser(user);
    }, []);

    // Hàm random mau cho background của Footer
    const handleRandomColor = useCallback(() => {
        const numberRan = Math.floor(Math.random() * colors.length);
        setFooterColor(colors[numberRan]);
    }, []);

    //Mỗi lần thông tin user thay đổi, sẽ cập nhật lại thời gian sửa đổi
    useEffect(() => {
        const currentdate = new Date();
        const datetime = 
            currentdate.getDate() +
            '/' +
            (currentdate.getMonth() +1) +
            '/' +
            currentdate.getFullYear() +
            ' ' +
            currentdate.getHours() +
            ':' +
            currentdate.getMinutes() +
            ':' +
            currentdate.getSeconds();
            setLastTimeUpdate(datetime);
    }, [user]);

   return (
    <View style={styles.container}>
        <Header user={user}/>
        <Body 
            onUpdateInfor={handleUpdateInfor}
            onClickChangeBgFooter={handleRandomColor}
        />
        <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor}/>
    </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
});