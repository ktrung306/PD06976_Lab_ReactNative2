import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';

const Lab1_Bai1 = () => {
    return (
      <View>
        <Header
          title="Header"
          iconLeft={require('../../assets/img1/icon_back.png')}
          iconRight={require('../../assets/img1/icon_user.jpg')}
        />
        <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#000000', marginHorizontal: 0 }} />
        <Header
          title="Trang chủ"
          iconLeft={require('../../assets/img1/icon_back.png')}
          iconRight={require('../../assets/img1/icon_user.jpg')}
        />
        <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#000000', marginHorizontal: 0 }} />
        <Header
          iconLeft={require('../../assets/img1/icon_back.png')}
        />
        </View>
    );
};

export default Lab1_Bai1;