import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function Lab3_Bai1() {
  const offset = useSharedValue(0);

  const handlePress = () => {
    offset.value += Math.random() * 255;
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
    transform: [{ translateY: withSpring(offset.value)}],
    };
});

  return (
    <>
      <View style={styles.container}>
      <Button onPress={handlePress} title="Move" />
      <Animated.View style={[styles.box, animatedStyles]} />  
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  box: {
    height: 60,
    width: 60,
    backgroundColor: '#b58df1',
    borderRadius: 14,
  },
});
