import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack';

// wait for fonts to be loaded
const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'caveat-bold': require('./assets/fonts/Caveat-Bold.ttf')
})

export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState(false)
  
  if (fontsLoaded) {
    return (
      <Navigator />
    );
  }
  else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}  
        onError={console.warn}
      />
    )

  }

}
