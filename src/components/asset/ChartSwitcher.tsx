import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

import { tw } from '../ui/tailwind';

export function ChartSwitcher({
  label,
  enabled,
  onPress,
}: {
  label: string;
  enabled: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}) {
  return (
    <TouchableOpacity
      style={tw.style(
        'items-center justify-center rounded-full h-8 w-14',
        enabled && 'bg-primary',
        enabled ? 'border-0' : 'border-2 border-primary'
      )}
      onPress={onPress}
    >
      <Text style={tw`text-gray-200 uppercase`}>{label}</Text>
    </TouchableOpacity>
  );
}
