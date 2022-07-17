import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';

import { tw } from '../ui/tailwind';
import { assets } from '../../constants/assets';

import { AssetRow } from './AssetRow';
import { FlatList } from 'react-native-gesture-handler';

export function Home(): JSX.Element {
  return (
    <SafeAreaView style={tw`flex-1 justify-center px-4`}>
      <ImageBackground
        source={require('../ui/png/background.png')}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      />
      <FlatList
        data={Object.values(assets)}
        style={tw`px-4`}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <AssetRow assetName={item.name} />}
      />
    </SafeAreaView>
  );
}
