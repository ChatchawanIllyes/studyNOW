import { Text, View, TouchableOpacity, Image,  } from "react-native";
import { useRouter } from 'expo-router';


// Login & Create account page
export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingBottom: 200,
      }}
    >

      <Image 
      source ={require('../assets/images/KojiLogo_V1.png')}
      style = {{height: 200, width: 200}}
      />

      <Text style={{ fontSize: 24, fontWeight: "600"}}>
        Study smart, with Koji. {/* Add quotes that change, multiple quotes */}
      </Text>


      <TouchableOpacity
        onPress={
          () => router.push('/login')}
        style={{
          backgroundColor: "black", 
          paddingVertical: 12,
          paddingHorizontal: 70,
          borderRadius: 8,
          position: 'absolute',
          bottom: 100
          
        }}
        
      >
        {/*Login Button*/}
        <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
          Login
        </Text>
    
      </TouchableOpacity>

      {/*Create Account Button */}
      <TouchableOpacity
      onPress = {() => router.push('/main')}
      style = {{
        backgroundColor: "black",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        position: 'absolute',
        bottom: 50,
      }}
      > 
        

        <Text style ={{color : "white", fontSize: 16, fontWeight: "600"}}>
          Create Account
        </Text>

      </TouchableOpacity>


    </View>
  );
}
