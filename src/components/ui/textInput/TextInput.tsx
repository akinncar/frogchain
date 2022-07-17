import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';

import { tw } from '../tailwind';

export function TextInput({ style, ...props }) {
  return (
    <NativeTextInput
      style={tw.style(
        'bg-background w-full h-12 rounded-lg px-4 text-white',
        style
      )}
      placeholderTextColor="#A1A1A1"
      {...props}
    />
  );
}
