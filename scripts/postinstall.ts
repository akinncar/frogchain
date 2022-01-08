import 'dotenv/config';
import * as child_process from 'child_process';

// Uncommment to rename the application binaries on postinstall.
//const {APP_DISPLAY_NAME} = process.env;
//child_process.execSync(
//  `npx react-native-rename ${APP_DISPLAY_NAME}`,
//  {stdio: 'inherit'}
//);

// Uncommment to regenerate the application icon on postinstall.
//child_process.execSync(
//  'npx app-icon generate -i assets/image/app-icon.png --platforms=android,ios',
//  {stdio: 'inherit'}
//);

child_process.execSync('npx patch-package', { stdio: 'inherit' });

// Uncomment to reinstall pods on postinstall.
// import {macos} from 'platform-detect';
// if (macos) {
//   child_process.execSync('npx pod-install', { stdio: 'inherit' });
// }