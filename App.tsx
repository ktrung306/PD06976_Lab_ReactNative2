import React from "react";
import Demo_Lab1 from "./src/screens/Lab1_Demo";
import Lab1_Bai1 from "./src/screens/Lab1_Bai1";
import Lab1_Bai2 from "./src/screens/Lab1_Bai2";
import Lab1_Bai3 from "./src/screens/Lab1_Bai3";
import CounterStart from "./src/screens/Lab2_Demo";
import { Lab2_Bai1 } from "./src/screens/Lab2_Bai1/Main";
import Lab2_Bai2_Bai3 from "./src/screens/Lab2_Bai2_Bai3/Main";
import Lab3_Bai2 from "./src/screens/Lab3_Bai2";
import Lab3_Bai1 from "./src/screens/Lab3_Bai1";
import Lab3_Bai3 from "./src/screens/Lab3_Bai3";
import Lab4_Bai1 from "./src/screens/Lab4_Bai1";
import Lab4_Bai2 from "./src/screens/Lab4_Bai2";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import GD from "./src/screens/Lab5/viewApp";
import store from "./src/screens/Lab5/store";
//import { store } from "./src/screens/Lab6_Bai1/store";
import CounterScreen from "./src/screens/Lab6_Bai1/HomeScreen";
import PokemonScreen from "./src/screens/Lab6_Bai2/PokemonScreen";
//import { store } from "./src/screens/Lab6_Bai2/store";
import Lab7_Bai2 from "./src/screens/Lab7_Bai2/lab7";
import Lab7_Bai1 from "./src/screens/Lab7/Login";



function App() {
  return(
      /*Lab 5*/
      //  <Provider store={store}>
      //    <GD/>
      //  </Provider>
      /*Lab 6_1*/
      // <Provider store={store}>
      //   <PokemonScreen />
      // </Provider>
      <Lab7_Bai1 />
       //<Lab7_Bai2/>
  )};
export default App;  