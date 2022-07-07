import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Loading } from '../loading/Loading';
import { tw } from '../tailwind';

export function Button({
  title,
  onPress,
  loading,
  style = {},
  variant = 'primary',
  ...rest
}): JSX.Element {
  const isPrimary = variant === 'primary';

  return (
    <TouchableOpacity
      style={tw.style(
        'justify-center rounded-full h-14 w-full',
        isPrimary ? 'bg-primary' : 'bg-black',
        isPrimary ? 'border-0' : 'border-2 border-primary',
        style
      )}
      activeOpacity={loading ? 1 : 0.5}
      onPress={loading ? null : onPress}
      {...rest}
    >
      {loading ? (
        <Loading />
      ) : (
        <Text style={tw`text-white text-center font-bold`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
