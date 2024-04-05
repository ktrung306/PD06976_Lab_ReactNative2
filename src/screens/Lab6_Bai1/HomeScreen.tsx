import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { decrement, increment, multiply } from './counter';
import { useAppDispatch, useAppSelector } from './useRedux';

const CounterScreen = () => {
  const counter = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  const onIncreaseCounter = () => dispatch(increment());
  const onDecrementCounter = () => dispatch(decrement());
  const onMultiplyCounter = () => dispatch(multiply(2));
  const onResetCounter = () => dispatch({ type: 'RESET_COUNTER' });

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{counter?.value}</Text>
      <Pressable onPress={onIncreaseCounter} style={styles.btn}>
        <Text>Tăng biến đếm</Text>
      </Pressable>

      <Pressable onPress={onDecrementCounter} style={styles.btn}>
        <Text>Giảm biến đếm</Text>
      </Pressable>

      <Pressable onPress={onMultiplyCounter} style={styles.btn}>
        <Text>Mũ bình phương biến đếm</Text>
      </Pressable>

      <Pressable onPress={onResetCounter} style={styles.btn}>
        <Text>Reset biến đếm</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 200,
  },

  counterText: {
    fontSize: 36,
    marginBottom: 20
  },
  btn: {
    backgroundColor: 'orange',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 10,
}
});

export default CounterScreen;
