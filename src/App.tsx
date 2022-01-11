import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App(): JSX.Element {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
    >
      <Text>Sled</Text>
    </View>
  );
}
