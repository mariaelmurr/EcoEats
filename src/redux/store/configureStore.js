import {combineReducers} from 'redux';

import {thunk} from 'redux-thunk';

import {persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';

import authReducer from '../reducers/authReducer';

const reducers = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: [],
  // transforms: [settingsBlacklistFilter],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(thunk),
});

export default store;
