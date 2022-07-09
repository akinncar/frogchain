import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import Routes from './routes';

LogBox.ignoreLogs(['Require cycle:']);
// Github Issue: https://github.com/tradle/react-native-crypto/issues/30
// It occurs when change randombytes to react-native-randombytes

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
}
