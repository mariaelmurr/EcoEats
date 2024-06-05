/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AxiosMiddleware} from './src/redux/middleware';

AxiosMiddleware.boot();

AppRegistry.registerComponent(appName, () => App);
