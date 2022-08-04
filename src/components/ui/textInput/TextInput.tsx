import React from 'react';
import { TextInput as NativeTextInput, TextInputProps } from 'react-native';

import { tw } from '../tailwind';

type Props = TextInputProps & {
  style?: TextInputProps['style'] | any;
};

export function TextInput({ style, ...props }: Props) {
  return (
    <NativeTextInput
      style={tw.style(
        'bg-background w-full rounded-lg py-4 px-4 text-gray-200',
        style
      )}
      placeholderTextColor="#A1A1A1"
      {...props}
    />
  );
}
