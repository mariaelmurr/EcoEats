import React, {useEffect} from 'react';

import AppContainer from './AppContainer';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';

import store from './src/redux/store/configureStore';
import {Provider} from 'react-redux';

const App = () => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
