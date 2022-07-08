/**
 * @format
 */

import { AppRegistry } from 'react-native';
import './shim.js';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
