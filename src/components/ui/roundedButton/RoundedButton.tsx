import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as Icons from '../svg/icons/rn';

import { tw } from '../tailwind';

export function RoundedButton({
  icon,
  onPress,
  style = {},
  variant = 'primary',
  ...rest
}): JSX.Element {
  const isPrimary = variant === 'primary';

  const Icon = Icons[icon];
  return (
    <TouchableOpacity
      style={tw.style(
        'items-center justify-center rounded-full h-14 w-14',
        isPrimary ? 'bg-primary' : 'bg-black',
        isPrimary ? 'border-0' : 'border-2 border-primary',
        style
      )}
      onPress={onPress}
      {...rest}
    >
      <Icon />
    </TouchableOpacity>
  );
}
