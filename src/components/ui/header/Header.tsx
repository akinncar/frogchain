import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { tw } from '../tailwind';

import { RoundedButton } from '../roundedButton/RoundedButton';
import { ArrowBack } from '../svg/icons/rn';

export function Header({ title }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`w-full my-4`}>
      {/* <RoundedButton icon="ArrowBack" onPress={navigation.goBack} /> */}
      <TouchableOpacity
        onPress={navigation.goBack}
        style={tw` flex-row items-center`}
      >
        <ArrowBack />
        <Text style={tw`text-gray-200 text-center px-2 text-lg`}>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
