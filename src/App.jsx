import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Beranda from './screen/Beranda';
import Akun from './screen/Akun';

const Stack = createNativeStackNavigator();

function App ()  {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Beranda">
          <Stack.Screen 
            name="Beranda" 
            options={{headerShown: false}}
            component={Beranda} 
          />
          <Stack.Screen 
          name="Akun" 
          options={{headerShown: false}}
          component={Akun} 
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}; 

export default App;

/*export default function App() {
  return (
    <View style={layout.box}>
      <Text style={{fontSize: 20}}>belajarKuy</Text>
      <Tombol label={'Save'}
      onPress={() => Alert.alert('Info', 'Berhasil di Simpan')}
       />
      <Card />
    </View>
  )
}

const layout = StyleSheet.create({
  box: {
    margin: 20,
    borderWidth: 1,
 padding: 10,
  }
});*/