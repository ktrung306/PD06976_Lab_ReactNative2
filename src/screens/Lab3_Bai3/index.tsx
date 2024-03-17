import React, { useRef } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const DATA = [
  { title: "Design System", text: 'Guido van Rossum',
   imageUri: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-user-flat-character-avatar-png-png-image_4654505.jpg' },
  { title: "React Native 101", text: 'Rasmus Lerdorf',
   imageUri: 'https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-avatar-pattern-flat-cartoon-user-image_1200105.jpg'},
  { title: "Agile Basics", text: 'Brendan Eich',
   imageUri: 'https://png.pngtree.com/png-clipart/20190904/original/pngtree-user-cartoon-girl-avatar-png-image_4492903.jpg'},
  { title: "React Native 102", text: 'Guido van Rossum', 
   imageUri: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-user-flat-character-avatar-png-png-image_4651285.jpg' },
  { title: "Agile Basics", text: 'Rasmus Lerdorf', 
   imageUri: 'https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-circular-pattern-user-cartoon-avatar-image_1200102.jpg' },
  { title: "Design System", text: 'Brendan Eich',
  imageUri: 'https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-avatar-pattern-flat-cartoon-user-image_1200105.jpg' },
  { title: "React Native 103", text: 'Guido van Rossum',
  imageUri: 'https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-circular-pattern-user-cartoon-avatar-image_1200102.jpg'},
  { title: "Agile Basics", text: 'Rasmus Lerdorf',
  imageUri: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-user-flat-character-avatar-png-png-image_4651285.jpg' },
  { title: "Design System", text: 'Brendan Eich',
  imageUri: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-user-flat-character-avatar-png-png-image_4654505.jpg' },
  // Add more items as needed
];

const Header_Max_Height = 240;
const Header_Min_Height = 120;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

const DynamicHeader = ({ value }: any) => {
  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  const animatedHeaderColor = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: ['#181D31', '#678983'],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animatedHeaderHeight,
          backgroundColor: animatedHeaderColor,
        },
      ]}>
      <Image
        source={{ uri: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-user-flat-character-avatar-png-png-image_4654505.jpg' }} // Đặt đường dẫn ảnh thích hợp
        style={styles.headerImage}
      />
      <Text style={styles.title}>Khắc Trung</Text>
    </Animated.View>
  );
};

export default function Lab3_Bai3() {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <DynamicHeader value={scrollOffsetY} />
      <ScrollView
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          {
            useNativeDriver: false,
          },
        )}>
        {DATA.map(val => {
          return (
            <View style={styles.card}>
              <Text style={styles.subtitle}>{val.title}</Text>
              <Text style={styles.subtitle}>Tác Giả: {val.text}</Text>
              <Image
                source={{ uri: val.imageUri }}
                style={styles.cardImage}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    paddingTop: 25,
  },
  title: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerImage: {
    width: 100,
    height: 100, // Điều chỉnh kích thước ảnh theo nhu cầu
    borderRadius: 50, // Điều chỉnh bo tròn theo nhu cầu
    marginBottom: 10,
  },
  card: {
    height: 120,
    backgroundColor: '#E6DDC4',
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    borderRadius: 20,
  },
  cardImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginLeft: 10,
  },
  subtitle: {
    color: '#181D31',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
  },
});
