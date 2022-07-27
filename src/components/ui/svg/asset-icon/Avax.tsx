import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgAvax = props => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M32.335 6.862H7.638v22.447h24.697V6.861Z" fill="#fff" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39.987 20c0 11.031-8.949 19.973-19.987 19.973C8.962 39.973.013 31.031.013 20 .013 8.969 8.962.027 20 .027 31.038.027 39.987 8.969 39.987 20Zm-25.65 7.948h-3.88c-.815 0-1.217 0-1.463-.157a.985.985 0 0 1-.446-.77c-.015-.29.186-.643.589-1.35l9.577-16.87c.408-.716.614-1.074.874-1.207a.989.989 0 0 1 .894 0c.26.133.466.491.874 1.207l1.968 3.435.01.018c.44.768.664 1.158.761 1.567.108.447.108.918 0 1.364-.098.412-.319.805-.766 1.585l-5.03 8.887-.013.023c-.443.775-.668 1.167-.98 1.464a2.92 2.92 0 0 1-1.192.692c-.408.112-.864.112-1.778.112Zm9.795 0h5.558c.82 0 1.232 0 1.478-.161a.982.982 0 0 0 .447-.776c.014-.28-.183-.62-.57-1.285l-.04-.069-2.783-4.76-.032-.053c-.391-.661-.589-.995-.842-1.124a.978.978 0 0 0-.889 0c-.255.133-.462.48-.869 1.183l-2.774 4.759-.01.016c-.406.7-.609 1.051-.594 1.338.02.314.182.604.447.776.24.156.653.156 1.473.156Z"
      fill="#E84142"
    />
  </Svg>
);

export default SvgAvax;
