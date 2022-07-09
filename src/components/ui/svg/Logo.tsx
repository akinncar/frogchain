import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

const SvgLogo = props => (
  <Svg
    width={208}
    height={48}
    viewBox="0 0 208 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_220_1142)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.61077 37.6759C12.982 39.9364 16.9454 41.1428 21 41.1428V48C22.8123 48 24.5503 47.2775 25.8318 45.9916C27.1134 44.7056 27.8333 42.9615 27.8333 41.1428C27.8333 39.3242 27.1134 37.5801 25.8318 36.2942C24.5503 35.0082 22.8123 34.2857 21 34.2857V34.3007C18.2941 34.3007 15.649 33.4954 13.3988 31.9869C11.1489 30.4783 9.3953 28.3341 8.35993 25.8253C7.32434 23.3167 7.05345 20.5562 7.58125 17.893C8.10928 15.2298 9.41218 12.7835 11.3256 10.8634C13.239 8.9433 15.6768 7.63575 18.3309 7.106C20.9847 6.57625 23.7358 6.84813 26.2357 7.88723C28.7357 8.92642 30.8725 10.6861 32.3759 12.9439C33.8792 15.2016 34.6817 17.856 34.6817 20.5714H21V13.7143C19.1876 13.7143 17.4496 14.4368 16.1682 15.7227C14.8865 17.0086 14.1667 18.7528 14.1667 20.5714C14.1667 22.3901 14.8865 24.1342 16.1682 25.4202C17.4496 26.7062 19.1876 27.4286 21 27.4286V20.5714C21 24.6401 22.2022 28.6174 24.4548 32.0003C26.7075 35.3833 29.9091 38.02 33.655 39.577C37.4008 41.134 41.5228 41.5414 45.4993 40.7476C49.4759 39.9538 53.1287 37.9946 55.9957 35.1176C58.8626 32.2407 60.8152 28.5751 61.6061 24.5847C62.3971 20.5942 61.9911 16.458 60.4396 12.6991C58.888 8.94015 56.2605 5.72734 52.8893 3.46694C49.5181 1.2065 45.5546 1.67115e-05 41.5 1.67115e-05V20.5714C41.5 16.5028 40.2978 12.5255 38.0452 9.14257C35.7926 5.75962 32.5909 3.12293 28.845 1.56593C25.0992 0.0089103 20.9773 -0.398473 17.0007 0.395289C13.0241 1.18905 9.37138 3.14827 6.50437 6.02526C3.6374 8.9022 1.68487 12.5677 0.893889 16.5581C0.102908 20.5486 0.50893 24.6848 2.06044 28.4437C3.61196 32.2027 6.23953 35.4155 9.61077 37.6759ZM55.1667 17.1429C55.1667 15.2493 53.637 13.7143 51.75 13.7143C49.863 13.7143 48.3334 15.2493 48.3334 17.1429C48.3334 19.0364 49.863 20.5714 51.75 20.5714C53.637 20.5714 55.1667 19.0364 55.1667 17.1429Z"
        fill="white"
      />
      <Path
        d="M86.981 16.4218V12.9841H75.5V30.5994H79.796V23.473H85.172V20.1356H79.796V16.4218H86.981Z"
        fill="white"
      />
      <Path
        d="M95.4192 17.1245C94.6655 17.5594 94.0377 18.1617 93.5352 18.9312V16.5975H89.2393V30.5994H93.5352V24.1003C93.5352 22.9461 93.803 22.1431 94.3385 21.6914C94.8747 21.223 95.6787 20.9888 96.7505 20.9888H97.9317V16.447C97.01 16.447 96.173 16.6728 95.4192 17.1245Z"
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M102.648 29.9219C103.753 30.5074 104.992 30.8001 106.366 30.8001C107.739 30.8001 108.978 30.5074 110.084 29.9219C111.206 29.3363 112.086 28.4999 112.722 27.4126C113.375 26.3085 113.702 25.0371 113.702 23.5985C113.702 22.1598 113.383 20.8967 112.747 19.8094C112.11 18.7053 111.24 17.8605 110.134 17.275C109.029 16.6895 107.79 16.3967 106.416 16.3967C105.042 16.3967 103.804 16.6895 102.698 17.275C101.593 17.8605 100.722 18.7053 100.085 19.8094C99.449 20.8967 99.1302 22.1598 99.1302 23.5985C99.1302 25.0538 99.4407 26.3252 100.06 27.4126C100.696 28.4999 101.56 29.3363 102.648 29.9219ZM108.451 26.183C107.882 26.7852 107.187 27.0863 106.366 27.0863C105.545 27.0863 104.859 26.7852 104.306 26.183C103.77 25.5808 103.502 24.7193 103.502 23.5985C103.502 22.4609 103.778 21.5993 104.331 21.0139C104.883 20.4116 105.579 20.1105 106.416 20.1105C107.237 20.1105 107.923 20.4116 108.476 21.0139C109.046 21.6161 109.33 22.4777 109.33 23.5985C109.33 24.7193 109.037 25.5808 108.451 26.183Z"
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M123.895 16.999C123.157 16.5975 122.295 16.3967 121.307 16.3967C120.151 16.3967 119.104 16.6895 118.167 17.275C117.229 17.8605 116.483 18.697 115.93 19.7843C115.395 20.8717 115.127 22.1347 115.127 23.5733C115.127 25.012 115.395 26.2834 115.93 27.3875C116.483 28.4748 117.229 29.3196 118.167 29.9219C119.104 30.5074 120.151 30.8001 121.307 30.8001C122.295 30.8001 123.157 30.5994 123.895 30.1979C124.632 29.7797 125.209 29.2444 125.628 28.592V30.5743C125.628 31.6951 125.36 32.5064 124.824 33.0083C124.305 33.5269 123.601 33.7862 122.714 33.7862C121.977 33.7862 121.357 33.6272 120.855 33.3094C120.352 33.0083 120.034 32.5901 119.9 32.0548H115.654C115.839 33.7277 116.575 35.0492 117.865 36.0194C119.154 37.0064 120.838 37.4999 122.915 37.4999C124.472 37.4999 125.77 37.1905 126.809 36.5715C127.864 35.9525 128.643 35.1161 129.145 34.0622C129.664 33.0251 129.924 31.8624 129.924 30.5743V16.5975H125.628V18.5798C125.226 17.9274 124.648 17.4005 123.895 16.999ZM124.723 21.0641C125.326 21.683 125.628 22.5278 125.628 23.5985C125.628 24.6691 125.326 25.5139 124.723 26.1329C124.137 26.7518 123.418 27.0613 122.563 27.0613C121.709 27.0613 120.98 26.7518 120.377 26.1329C119.791 25.4972 119.498 24.644 119.498 23.5733C119.498 22.5027 119.791 21.6663 120.377 21.0641C120.98 20.4451 121.709 20.1356 122.563 20.1356C123.418 20.1356 124.137 20.4451 124.723 21.0641Z"
        fill="white"
      />
      <Path
        d="M133.434 17.1245C132.68 18.4795 132.304 20.0269 132.304 21.7667C132.304 23.5065 132.68 25.0539 133.434 26.4089C134.188 27.7639 135.235 28.8262 136.574 29.5957C137.931 30.3485 139.463 30.7249 141.172 30.7249C143.266 30.7249 145.057 30.1812 146.548 29.0938C148.039 27.9898 149.035 26.4842 149.538 24.5771H144.814C144.463 25.3132 143.96 25.8736 143.307 26.2583C142.671 26.6431 141.942 26.8355 141.121 26.8355C139.798 26.8355 138.727 26.3755 137.906 25.4554C137.085 24.5353 136.675 23.3057 136.675 21.7667C136.675 20.2277 137.085 18.9981 137.906 18.0781C138.727 17.158 139.798 16.6979 141.121 16.6979C141.942 16.6979 142.671 16.8903 143.307 17.275C143.96 17.6599 144.463 18.2203 144.814 18.9563H149.538C149.035 17.0492 148.039 15.5437 146.548 14.4396C145.057 13.3355 143.266 12.7834 141.172 12.7834C139.463 12.7834 137.931 13.1682 136.574 13.9377C135.235 14.6905 134.188 15.7528 133.434 17.1245Z"
        fill="white"
      />
      <Path
        d="M164.654 18.053C163.683 16.9824 162.394 16.4471 160.786 16.4471C159.847 16.4471 159.002 16.6311 158.248 16.9991C157.494 17.3672 156.9 17.8607 156.464 18.4796V12.0308H152.168V30.5996H156.464V22.9964C156.464 22.0595 156.707 21.3319 157.193 20.8133C157.678 20.2947 158.332 20.0354 159.153 20.0354C159.973 20.0354 160.627 20.2947 161.112 20.8133C161.598 21.3319 161.841 22.0595 161.841 22.9964V30.5996H166.111V22.4192C166.111 20.5623 165.626 19.1069 164.654 18.053Z"
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M169.047 19.7843C168.511 20.8717 168.243 22.1347 168.243 23.5733C168.243 25.012 168.511 26.2834 169.047 27.3875C169.599 28.4748 170.344 29.3196 171.283 29.9219C172.22 30.5074 173.259 30.8001 174.397 30.8001C175.386 30.8001 176.248 30.5994 176.985 30.1979C177.738 29.7964 178.325 29.2694 178.743 28.617V30.5994H183.039V16.5975H178.743V18.5798C178.341 17.9274 177.764 17.4005 177.01 16.999C176.274 16.5975 175.41 16.3967 174.423 16.3967C173.267 16.3967 172.22 16.6895 171.283 17.275C170.344 17.8605 169.599 18.697 169.047 19.7843ZM177.839 21.0641C178.442 21.683 178.743 22.5278 178.743 23.5985C178.743 24.6691 178.442 25.5139 177.839 26.1329C177.253 26.7518 176.533 27.0613 175.679 27.0613C174.825 27.0613 174.096 26.7518 173.494 26.1329C172.907 25.4972 172.614 24.644 172.614 23.5733C172.614 22.5027 172.907 21.6663 173.494 21.0641C174.096 20.4451 174.825 20.1356 175.679 20.1356C176.533 20.1356 177.253 20.4451 177.839 21.0641Z"
        fill="white"
      />
      <Path
        d="M186.449 14.4898C186.935 14.9247 187.554 15.1422 188.308 15.1422C189.045 15.1422 189.648 14.9247 190.117 14.4898C190.602 14.0381 190.846 13.4861 190.846 12.8336C190.846 12.1645 190.602 11.6125 190.117 11.1775C189.648 10.7258 189.045 10.5 188.308 10.5C187.554 10.5 186.935 10.7258 186.449 11.1775C185.98 11.6125 185.745 12.1645 185.745 12.8336C185.745 13.4861 185.98 14.0381 186.449 14.4898Z"
        fill="white"
      />
      <Path
        d="M186.148 30.5996H190.443V16.5977H186.148V30.5996Z"
        fill="white"
      />
      <Path
        d="M206.018 18.0529C205.046 16.9823 203.74 16.447 202.099 16.447C201.178 16.447 200.349 16.631 199.611 16.999C198.874 17.3503 198.288 17.8355 197.853 18.4544V16.5975H193.557V30.5994H197.853V22.9962C197.853 22.0594 198.096 21.3318 198.582 20.8131C199.067 20.2946 199.72 20.0352 200.541 20.0352C201.362 20.0352 202.015 20.2946 202.501 20.8131C202.987 21.3318 203.229 22.0594 203.229 22.9962V30.5994H207.5V22.4191C207.5 20.5622 207.006 19.1068 206.018 18.0529Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_220_1142">
        <Rect width={207} height={48} fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgLogo;