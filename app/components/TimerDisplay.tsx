import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet} from "react-native";


export default function DisplayTimer() {


    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
         }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);
    
    //formatted time
    const formatTime = (totalSeconds: number) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        const digits = (num: number) => num.toString().padStart(2, '0');
        return `${digits(hours)}:${digits(minutes)}:${digits(seconds)}`
    }

    const formattedTime = formatTime(seconds)
        const handlePress = () => {
        setIsRunning(prev => {
            console.log(isRunning ? "Stopped" : "Started");
            return !prev;
        }); 
    };
    
        const buttonText = isRunning ? "Stop" : "Start";
        const statusMessage = isRunning ? "Timer is running..." : "Timer is stopped.";
    
    return (
        <View>
            <TouchableOpacity onPress={handlePress} style={styles.startButton}>
                <Text style={styles.startButtonText}>{buttonText}</Text>
            </TouchableOpacity>

            <Text>{formattedTime}</Text>

            <Text style={styles.statusText}>{statusMessage}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    startButton: {
    backgroundColor: "#000000",
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  startButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "800", 
  },
  statusText: {
    marginBottom: 16,
  },
})