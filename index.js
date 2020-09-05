/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// import SingInOrUp from './src/components/SingInOrUp/signInOrUp.js'
import Login from 'src/components/Login/login.js';

AppRegistry.registerComponent(appName, () => Login);
