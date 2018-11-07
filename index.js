/** @format */

import 'core-js/es6';
import { AppRegistry } from 'react-native';
import App from './src/entry/App/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
