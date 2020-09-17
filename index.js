/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// import Login from './src/components/Login/login'
// import SignUpEmail from '/src/components/SignUpEmail/signUpEmail.js'
// import SignUpPhone from '/src/components/SignUpPhone/signUpPhone.js'
// import SingInOrUp from '/src/components/SingInOrUp/signInOrUp'
// import CodePhone from '/src/components/CodePhone/codePhone'
// import ConfirmCodePhone from '/src/components/ConfirmCodePhone/confirmCodePhone'
// import Splash from '/src/components/Splash/splash'
// import Introduction from '/src/components/Introduction/introduction'
// import EmailAddress from '/src/components/EmailAddress/emailAddress'
// import Birthday from '/src/components/Birthday/birthday'
// import Picture from '/src/components/Picture/picture'
// import Gender from '/src/components/Gender/gender'
// import Religious from '/src/components/Religious/religious'
// import App from './App'

import Work from '/src/components/Work/work'
// import Job from '/src/components/Job/job'
// import Education from '/src/components/Education/education'

AppRegistry.registerComponent(appName, () => Work);
