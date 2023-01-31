import { StyleSheet, Text, View } from 'react-native';

import ShopNavigatior from './src/navigation/ShopNavigatior';
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoCondensed: require("./src/assets/fonts/RobotoCondensed-Bold.ttf")
  })

  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ShopNavigatior/>
  );
}