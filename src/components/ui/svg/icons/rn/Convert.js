import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgConvert = props => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.5 6v3l4-4-4-4v3a8 8 0 0 0-8 8c0 1.57.46 3.03 1.24 4.26L7.2 14.8a5.9 5.9 0 0 1-.7-2.8 6 6 0 0 1 6-6Zm6.76 1.74L17.8 9.2c.44.84.7 1.8.7 2.8a6 6 0 0 1-6 6v-3l-4 4 4 4v-3a8 8 0 0 0 8-8c0-1.57-.46-3.03-1.24-4.26Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgConvert;
