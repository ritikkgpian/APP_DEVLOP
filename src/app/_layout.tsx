import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import {store} from '../../store';
import Toast from "react-native-toast-message";
export default function RootLayout() {
  return (
      <Provider store={store} >
      <Stack   >
        <Stack.Screen name="(tab)" options={{headerShown:false}} ></Stack.Screen>
        <Stack.Screen  name="index"  ></Stack.Screen>
        <Stack.Screen  name="NOTICES"  ></Stack.Screen>
        <Stack.Screen  name="EVENTS"  ></Stack.Screen>
        <Stack.Screen  name="SAVE"  ></Stack.Screen>
      </Stack>
      <Toast></Toast>
      </Provider>
  )
}