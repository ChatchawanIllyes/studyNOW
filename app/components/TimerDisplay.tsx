import { useState, useEffect } from "react";
import { Text, View } from "react-native";


export default function DisplayTimer() {


    const [timer, setTimer] = useState(0);
    
        useEffect(() => {
            const startTime = Date.now();
    
            const updateTime = () => {
            setTimer((Date.now() - startTime));
        };
    
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
        }, [])
    
        const formatTime = (totalMs: number) => {
            const totalSeconds = Math.floor(totalMs / 1000)
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = Math.floor(totalSeconds % 60);
    
            const digits = (num: number) => num.toString().padStart(2, '0');
            return `${digits(hours)}:${digits(minutes)}:${digits(seconds)}`
        }
    
        const formattedTime = formatTime(timer)
    
    return (
        <View>
            <Text>
                {formattedTime}
            </Text>
        </View>
    )
}