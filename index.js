/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import { name as appName } from './app.json';
// YellowBox.ignoreWarnings(['Require cycle:']);

import Navigation from '/src/configs/Navigation'

AppRegistry.registerComponent(appName, () => Navigation);
