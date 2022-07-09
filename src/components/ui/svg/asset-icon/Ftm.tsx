import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgFtm = props => (
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
      fill="#13B5EC"
    />
    <Path
      d="M20 39.5C30.7696 39.5 39.5 30.7696 39.5 20C39.5 9.23045 30.7696 0.5 20 0.5C9.23045 0.5 0.5 9.23045 0.5 20C0.5 30.7696 9.23045 39.5 20 39.5Z"
      stroke="black"
      strokeOpacity={0.02}
      strokeWidth={0.8}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.8 16.475L24.7 14.2V18.75L20.8 16.475ZM24.7 26.225L19.5 29.2583L14.3 26.225V20.9167L19.5 23.95L24.7 20.9167V26.225ZM14.3 14.2L18.2 16.475L14.3 18.75V14.2ZM20.15 17.5583L24.05 19.8333L20.15 22.1083V17.5583ZM18.85 22.1083L14.95 19.8333L18.85 17.5583V22.1083ZM24.05 13.1167L19.5 15.7167L14.95 13.1167L19.5 10.4083L24.05 13.1167ZM13 12.6833V26.875L19.5 30.5583L26 26.875V12.6833L19.5 9L13 12.6833Z"
      fill="white"
    />
  </Svg>
);

export default SvgFtm;
