import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgHome = ({ color = '#fff', size = 24, ...props }) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="m12 3 8 6v12h-5v-7H9v7H4V9l8-6Z" fill={color} />
  </Svg>
);

export default SvgHome;
