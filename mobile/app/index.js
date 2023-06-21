import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Stack } from 'expo-router'

import Welcome from "../components/welcome/Welcome.jsx";
import Login from "./login/Login.jsx";


export default function Index() {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#2c333' },
          headerTitle: 'Calory Tracker',
          headerShadowVisible: false,
        }} />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Login/>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}





