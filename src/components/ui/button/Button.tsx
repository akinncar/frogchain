import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Loading } from '../loading/Loading';
import { tw } from '../tailwind';

export function Button({
  title,
  onPress,
  loading,
  disabled = false,
  style = {},
  variant = 'primary',
  ...props
}): JSX.Element {
  const isPrimary = variant === 'primary';

  return (
    <TouchableOpacity
      style={tw.style(
        'justify-center rounded-full h-14 w-full',
        isPrimary && 'bg-primary',
        isPrimary ? 'border-0' : 'border-2 border-primary',
        disabled && 'opacity-50',
        style
      )}
      activeOpacity={loading ? 1 : 0.5}
      onPress={loading ? null : onPress}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <Loading />
      ) : (
        <Text style={tw`text-gray-200 text-center font-bold`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
