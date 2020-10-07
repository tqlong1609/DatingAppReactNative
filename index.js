/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
// YellowBox.ignoreWarnings(['Require cycle:']);

// import Login from './src/components/Login/login'
// import SignUpEmail from '/src/components/SignUpEmail/signUpEmail.js'
// import SignUpPhone from '/src/components/SignUpPhone/signUpPhone.js'
// import SingInOrUp from '/src/components/SingInOrUp/signInOrUp'
// import CodePhone from '/src/components/CodePhone/codePhone.controller'
// import ConfirmCodePhone from '/src/components/ConfirmCodePhone/confirmCodePhone'
// import Splash from '/src/components/Splash/splash'
// import Introduction from '/src/components/Introduction/introduction'
// import EmailAddress from '/src/components/EmailAddress/emailAddress'
// import Birthday from '/src/components/Birthday/birthday'
// import Picture from '/src/components/Picture/picture'
// import Gender from '/src/components/Gender/gender'
// import App from './App'

// import Work from '/src/components/Work/work'
// import Job from '/src/components/Job/job'
// import Education from '/src/components/Education/education'

// import Religious from '/src/components/Religious/religious'
// import Politics from '/src/components/Politics/politics'
// import HightestLevelAttended from '/src/components/HightestLevelAttended/hightestLevelAttended'
// import Ethnicity from '/src/components/Ethnicity/ethnicity'
// import Kids from '/src/components/Kids/kids'
// import FamilyPlans from '/src/components/FamilyPlans/familyPlans'
// import BottomNavigation from '/src/configs/Navigation/bottomNavigation'
// import SwipeTest from '/test/swipeTest'
import ScreensNavigation from '/src/configs/Navigation/screensNavigation'

AppRegistry.registerComponent(appName, () => ScreensNavigation);
