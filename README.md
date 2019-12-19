# OrderFoodForTableAndroidApp

![Three First Screen](https://user-images.githubusercontent.com/49482201/71168625-c178ba00-2289-11ea-8899-67267a2a9f13.png?fbclid=IwAR30JZbX37cdVCAmEw8rQ-S6MVoIffRwxr3y23iEqRkaG6Dp1o5-XGnYlEw)
![Last Screen](https://user-images.githubusercontent.com/49482201/70845913-c226e000-1e86-11ea-93dd-47dd106a18bf.png)

## Features
- User Login/logout
- Food ordering.
- Table display
- Payment and billing history

## Requirements
- React Native
- NodeJS
- Yarn

## Setup instructions
* Editor, ex: [Visual Studio Code](https://code.visualstudio.com/)
* 
```
git clone https://github.com/lylinsunshine/OrderFoodForTableAndroidApp.git
cd OrderFoodForTableAndroidApp
```
* Install dependencies: `npm install` on **TERMINAL** or use hot key `Ctrl + Shift + ``

### Android

* Might be needed to run on Android Studio emulator or on real device: `adb reverse tcp:8081 tcp:8081`
* for [Nox](https://vn.bignox.com/)`adb connect 127.0.0.1:62001` 
* For the sample server: `adb reverse tcp:3000 tcp:3000`
* From command line, try:
```
npm react-native start
npm react-native run-android
```
Or run **NPM SCRIPTS** from package.json: 
> android

### iOS
Similar as Android:
```
npm react-native start
npm react-native run-ios
```
Or run **NPM SCRIPTS** from package.json:
> ios

Server Side: https://github.com/Hung1610/RestaurentAndroidApp-Backend-.NET-Core
