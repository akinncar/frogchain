import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgWallet = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2.28A2 2 0 0 0 22 15V9a2 2 0 0 0-1-1.72V5a2 2 0 0 0-2-2H5Zm0 2h14v2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6v2H5V5Zm8 4h7v6h-7V9Zm3 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgWallet;
