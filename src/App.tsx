import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </>
  );
}
