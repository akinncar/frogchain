import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgCopy = props => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15 7h6v14H7v-6"
      stroke="#fff"
      strokeMiterlimit={10}
      strokeLinecap="square"
    />
    <Path
      d="M15 1H1v14h14V1Z"
      stroke="#fff"
      strokeMiterlimit={10}
      strokeLinecap="square"
    />
  </Svg>
);

export default SvgCopy;
