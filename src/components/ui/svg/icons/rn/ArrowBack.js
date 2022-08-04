import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgArrowBack = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgArrowBack;
