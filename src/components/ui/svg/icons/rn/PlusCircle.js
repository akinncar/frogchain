import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgPlusCircle = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2 12c0-2.8 1.6-5.2 4-6.3V3.5C2.5 4.8 0 8.1 0 12c0 3.9 2.5 7.2 6 8.5v-2.2c-2.4-1.1-4-3.5-4-6.3Zm13-9c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9Zm5 10h-4v4h-2v-4h-4v-2h4V7h2v4h4v2Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgPlusCircle;
