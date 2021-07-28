import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import MainStack from './src/navigators/MainStack';
import { store, persistor } from './src/services/store';
import Route280 from './src/screens/Route280/index';
import Home from './src/screens/Home';

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>  
      {/* <MainStack/> */}
      <Home/>
      {/* <Route280 />  */}
    </PersistGate>{/*Fim PersistGate */}
  </Provider>/*Fim Provider*/
);/*Fim Export default*/

