// MainScreen.js
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SectionView from "./SectionView";
import SectionView2 from "./SectionView2";

const eventInfo = [
  {
    title: "Event 3",
    description: "Description for Event 3",
    address: "Hồ Tràm, Vũng Tàu",
    time: "09 : 00 AM - 12AM, 12/12/2024",
    car: "Xe bus",
    time2: "21 : 00 - 22 : 00",
    image:
      "https://www.chudu24.com/wp-content/uploads/2017/01/du-lich-ho-tram-7-1.jpg",
  },
];

const eventInfo2 = [
  {
    name: "Hồng Quỳnh",
    time: "06 : 00 AM - 12 : 00 AM",
    address: "234 Quang Trung, Hồ Chí Minh",
  },
];
const Lab1_Bai2 = () => {
  return (
    <ScrollView style={styles.container}>
      <SectionView title="Lịch trình" data={eventInfo} />
      <SectionView2 title="Khách sạn" data={eventInfo2} />
    </ScrollView>
  );
};

export default Lab1_Bai2;

const styles = StyleSheet.create({
  container: {},
});