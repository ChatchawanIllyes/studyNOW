import { Text, View, Button } from "react-native";
import TimerButton from "./components/startButton";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>hi</Text>
      
      <View>
        <TimerButton/>
      </View>

    </View>
  );
}
