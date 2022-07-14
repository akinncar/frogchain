import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { tw } from '../ui/tailwind';
import { assets } from '../../constants/assets';

import { AssetRow } from './AssetRow';
import { FlatList } from 'react-native-gesture-handler';

export function Home(): JSX.Element {
  return (
    <View style={tw`flex-1 justify-center bg-black px-4`}>
      {/* <ImageBackground
        source={require('../ui/png/background.png')}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
  /> */}
      <FlatList
        data={Object.values(assets)}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <AssetRow assetName={item.name} />}
      />
    </View>
  );
}
