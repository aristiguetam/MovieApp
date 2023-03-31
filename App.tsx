import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationScreen} from './src/navigator/NavigationScreen';
import {GradienProvider} from './src/context/GradientContext';
// import {FadeScreen} from './src/screens/FadeScreen';

const AppState = ({children}: any) => {
  return <GradienProvider>{children}</GradienProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <NavigationScreen />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
