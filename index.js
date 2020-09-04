/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import SingInOrUp from './src/components/SingInOrUp/signInOrUp.js'

AppRegistry.registerComponent(appName, () => SingInOrUp);
