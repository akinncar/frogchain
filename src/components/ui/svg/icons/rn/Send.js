import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSend = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M5 17.59 15.59 7H9V5h10v10h-2V8.41L6.41 19 5 17.59Z" fill="#fff" />
  </Svg>
);

export default SvgSend;
