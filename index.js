/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// import Login from './src/components/Login/login'
import SignUpEmail from '/src/components/SignUpEmail/signUpEmail.js'
// import SingInOrUp from '/src/components/SingInOrUp/signInOrUp'

AppRegistry.registerComponent(appName, () => SignUpEmail);
