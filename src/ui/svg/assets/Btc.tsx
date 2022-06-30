import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgBtc = props => (
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
      fill="#F7931A"
    />
    <Path
      d="M20 39.5C30.7696 39.5 39.5 30.7696 39.5 20C39.5 9.23045 30.7696 0.5 20 0.5C9.23045 0.5 0.5 9.23045 0.5 20C0.5 30.7696 9.23045 39.5 20 39.5Z"
      stroke="black"
      strokeOpacity={0.02}
      strokeWidth={0.8}
    />
    <Path
      d="M28.986 17.525C29.379 14.905 27.382 13.496 24.655 12.556L25.54 9.006L23.38 8.469L22.518 11.925C21.95 11.783 21.368 11.65 20.786 11.518L21.655 8.038L19.495 7.5L18.61 11.049C18.14 10.941 17.678 10.836 17.23 10.724L17.233 10.713L14.253 9.969L13.678 12.276C13.678 12.276 15.281 12.644 15.248 12.666C16.123 12.885 16.28 13.464 16.254 13.924L15.246 17.968C15.306 17.983 15.384 18.005 15.471 18.038L15.243 17.983L13.83 23.648C13.723 23.913 13.451 24.311 12.839 24.16C12.861 24.191 11.269 23.769 11.269 23.769L10.196 26.241L13.009 26.942C13.531 27.074 14.044 27.212 14.548 27.34L13.654 30.93L15.813 31.467L16.697 27.917C17.27 28.0711 17.8444 28.2202 18.42 28.364L17.538 31.899L19.698 32.436L20.591 28.854C24.276 29.551 27.046 29.27 28.212 25.938C29.152 23.255 28.166 21.706 26.227 20.698C27.64 20.372 28.702 19.444 28.987 17.525H28.986ZM24.049 24.448C23.383 27.131 18.864 25.68 17.399 25.316L18.586 20.56C20.051 20.926 24.747 21.65 24.049 24.448V24.448ZM24.718 17.486C24.108 19.927 20.348 18.686 19.13 18.382L20.205 14.07C21.424 14.374 25.353 14.94 24.718 17.486V17.486Z"
      fill="white"
    />
  </Svg>
);

export default SvgBtc;
