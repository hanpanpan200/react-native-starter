## React Native Starter

React Native Starter is a React Native boilerplate app to get you up and running quickly.

### Setup React Native

Please follow React Native [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to finish the setup.

In the `Building Projects with Native Code` section, please make sure you have setup your `Android` and `iOS` environment.

### Stack

[React Native](https://facebook.github.io/react-native/) `0.45.0` for build native Apps

[Redux](https://github.com/reactjs/redux) `3.6.0` a predictable state container for Javascript apps

[axios](https://github.com/mzabriskie/axios) `0.16.2` a promise based HTTP client for the browser and node.js

[prop-types](https://github.com/facebook/prop-types) `15.5.10` Runtime type checking for React props and similar objects

[react-native-router-flux](https://github.com/aksonov/react-native-router-flux) `^4.0.0-beta.21` navigation for React Native

[redux-thunk](https://github.com/gaearon/redux-thunk) `5.0.5` Thunk middleware for Redux

[redux-logger](https://github.com/evgenyrodionov/redux-logger) `3.0.6` Logger for Redux

### How to run

Please use [yarn](https://yarnpkg.com/en/) to install the npm dependencies.

```
yarn install
react-native link
```

Then you can run iOS:
```
react-native run-ios
```

Or run Android:
```
react-native run-android
```

### Available scripts

For test:

```
yarn test
```

For eslint:

```
yarn lint
```

### How to reuse

You've cloned the project and you're wanting to make it your own. But..."ReactNativeStarter".

With [react-native-rename](https://www.npmjs.com/package/react-native-rename), React Native Rename will replace all files, directories and references of `ReactNativeStarter` to what ever you'd like.

#### Install the package
```
yarn global add react-native-rename

```
#### Rename the App
```
react-native-rename NewAppName
```

#### Change ApiHost

Please change your API HOST in `./src/config/apiConfig`

For example, change:

```JavaScript
const API_HOST = ''

export default API_HOST

```
To:

```
const API_HOST = 'https://yourhost'

export default API_HOST

```

Then you can build your own App on the basis of ReactNativeStarter! 🙌🏻
