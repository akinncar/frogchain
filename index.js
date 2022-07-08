/**
 * @format
 */

import {AppRegistry} from 'react-native';
import './shim.js';
import App from './src/App';
import {name as appName} from './app.json';

if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer;
}

global.btoa = global.btoa || require('base-64').encode;
global.atob = global.atob || require('base-64').decode;

AppRegistry.registerComponent(appName, () => App);
