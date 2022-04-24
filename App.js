import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';

const cacheImages = images => images.map(image =>{
  if(typeof image === "string"){
      return Image.prefetch(image);
  } else {                         
      return Asset.fromModule(image).downloadAsync();
  }
  });

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);
  const loadAssets = async () => {
    const images = [
    require("./assets/loginBg.jpg"),
"http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png"    // url로 가져온 이미지
];
console.log(cacheImages(images));
} 
  return isReady ? (<Text>Ready</Text>) : (<AppLoading onError={console.error} onFinish={handleFinish}/>);
}