import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './src/infrastructure/navigation/';
import { AuthenticationContextProvider } from './src/services/authentication/AuthenticationContext';
import { useFonts, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIQNESLkfPDwKyLYOaWDt1iAUDqp3jlpY",
  authDomain: "foodswipe-d2297.firebaseapp.com",
  databaseURL: "https://foodswipe-d2297.firebaseio.com",
  projectId: "foodswipe-d2297",
  storageBucket: "foodswipe-d2297.appspot.com",
  messagingSenderId: "211953710318",
  appId: "1:211953710318:web:01725192c8047388706fff",
  measurementId: "G-EFLCYW89W4"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthenticationContextProvider>
      <Navigation />
    </AuthenticationContextProvider>
  );
}
