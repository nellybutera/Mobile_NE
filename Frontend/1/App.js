import React from 'react';
import { StoreProvider} from 'easy-peasy';
import { NavigationContainer } from '@react-navigation/native';

import store from './store';
import Navigator from './Navigator';

export default function App() {
  return (
    <StoreProvider store={store}>
      {/* <NavigationContainer> */}
        <Navigator/>
      {/* </NavigationContainer> */}
    </StoreProvider>
  );
}

