<p align="center">
  <img src="./assets/images/logo.jpg" />
</p>

# Swish 
An iOS and Android NBA app created with React Native. If you would like to request a feature, find a bug, have a question, or would like to leave feedback, open an issue! ⭐️ this repo to show support!

# Libraries Used
[React Native](https://github.com/facebook/react-native)

[React Navigation](https://reactnavigation.org/)

[Redux](https://redux.js.org/)

[React Redux](https://github.com/reduxjs/react-redux)

[Redux Promise](https://github.com/capaj/react-promise)

[Axios](https://github.com/qiangmao/axios)

[Moment](https://momentjs.com/)

[React-Native-webview](https://github.com/react-native-community/react-native-webview)

[React-Native-vector-icons](https://github.com/oblador/react-native-vector-icons)

[React-Native-video](https://github.com/react-native-community/react-native-video)

[React-Native-render-html](https://github.com/archriss/react-native-render-html)

[Firebase (email auth and real-time database)](https://firebase.google.com/)

# Before Run
* Create a firebase project
* In Authentication enable auth with email/password
* Create a Realtime Database
* Import json file from assets/
* In app/utils/misc, create the following pairs (key/value):

```
export const FIREBASEURL = YOUR_DATABASE_URL;
export const APIKEY = YOUR_API_KEY;
```

# Getting Started
1. Fork (optional) and clone repo
```
 git clone https://github.com/soufianeodf/react-native-NBA.git 

 cd react-native-NBA
```
2. Install dependencies
```
npm install
```
3. Run
```
react-native run-android

react-native run-ios
```
