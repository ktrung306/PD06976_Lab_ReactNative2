import { useRef, useState } from "react";
import { Button, Text, View } from "react-native";
import { Style } from "./styles";



function CounterStart() {
    const [counter, setCounter] = useState(0)
    const [count, setCount] = useState(30)

    const handleIncrease = ()=> {
        setCounter(counter+1)
    }

    let timerID = useRef() 
    const handleStart = ()=>{
        timerID.current =setInterval(() => {
            setCount(prevCount=>prevCount-1)
        }, 1000);
        console.log('handleStart: =>'+timerID.current);
    }

    const handleStop = ()=> {
        clearInterval(timerID.current)
        console.log('handleStop: =>'+timerID.current);
    }
    return(
        <View>
            <View style={Style.increase}>
                <Text>-----Tăng giá trị-----</Text>
                <Text>{counter}</Text>
                <Button title="Tăng" onPress={handleIncrease}></Button>
            </View>
            <View style={Style.Start_Stop}>
                <Text>-----Bắt đầu giảm và dừng lại-----</Text>
                <Text>{count}</Text>
                <Button  title="Start" onPress={handleStart}></Button>
                <Button  title="Stop" onPress={handleStop}></Button>
            </View>
        </View>
    )
}
export default CounterStart;