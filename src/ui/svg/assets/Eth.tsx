import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgEth = props => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
      fill="#2B2B2B"
    />
    <Path
      d="M24 47.4C36.9235 47.4 47.4 36.9235 47.4 24C47.4 11.0765 36.9235 0.600006 24 0.600006C11.0765 0.600006 0.600006 11.0765 0.600006 24C0.600006 36.9235 11.0765 47.4 24 47.4Z"
      stroke="black"
      strokeOpacity={0.02}
      strokeWidth={0.8}
    />
    <Path
      d="M23.3976 29.4912L32.394 24.2664L23.3976 9.60239L14.4 24.2676L23.3976 29.4912ZM32.4 25.9428L23.3976 38.3976L14.4 25.9404L23.3976 31.1628L32.4 25.9428Z"
      fill="white"
    />
  </Svg>
);

export default SvgEth;
