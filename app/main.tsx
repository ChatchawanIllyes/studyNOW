import { Text, Pressable, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import MainBar from "./components/mainBar"
import { useState, useEffect } from "react"


export default function MainHomePage() {
    //timer
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const startTime = Date.now();

        const updateTime = () => {
        setTimer((Date.now() - startTime));
    };

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
    }, [])


   



    const styles = StyleSheet.create({
        startButton: {
            backgroundColor: '#000000',
            color: 'white',
            fontSize: 16,
            fontWeight: 800,
            padding: 8,
            borderRadius: 8,

        }
    })



    return (
        <SafeAreaView
        style = {{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            
        }}
        >

          <TouchableOpacity
          onPress = {() => {
            console.log("Timer button has been pressed")
          }}>
             <Text style = {styles.startButton}>
                START
            </Text>
          </TouchableOpacity>
          <Text>
            {timer / 1000}
          </Text>
           
            <MainBar/>

            

        </SafeAreaView>
        
        
    )
}

