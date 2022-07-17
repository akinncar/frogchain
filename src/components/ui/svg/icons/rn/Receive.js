import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgReceive = ({ size = 24, ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.5 6.41 18.09 5 7.5 15.59V9h-2v10h10v-2H8.91L19.5 6.41Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgReceive;
