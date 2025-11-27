import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "red"
    },
    buttonContainer: {
        backgroundColor: "orange",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 50,
    },
    buttonStyle: {
        fontWeight: "500",
        color: "red",
        fontSize: 18,
        textAlign: "center",
    }
});

export default function TimerButton() {
    return (
        <SafeAreaView style={{ flex : 1, backgroundColor: "#FFF"}}>
            <View style = {styles.container}>
                <TouchableOpacity
                onPress = {() => console.log('Pressed')} //add function later
                style={styles.buttonContainer}
                >
                <Text
                style = {styles.buttonStyle}
                >
                Hello    
                </Text>

                

                </TouchableOpacity>
            </View>
        </SafeAreaView>
        
        
    );
}