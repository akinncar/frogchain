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
      d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
      fill="#2B2B2B"
    />
    <Path
      d="M20 39.5C30.7696 39.5 39.5 30.7696 39.5 20C39.5 9.23045 30.7696 0.5 20 0.5C9.23045 0.5 0.5 9.23045 0.5 20C0.5 30.7696 9.23045 39.5 20 39.5Z"
      stroke="black"
      strokeOpacity={0.02}
      strokeWidth={0.8}
    />
    <Path
      d="M19.498 24.576L26.995 20.222L19.498 8.00201L12 20.223L19.498 24.576ZM27 21.619L19.498 31.998L12 21.617L19.498 25.969L27 21.619Z"
      fill="white"
    />
  </Svg>
);

export default SvgEth;
