# OrderFoodForTableAndroidApp
write some things about app here.

![Three First Screen](https://user-images.githubusercontent.com/49482201/71168625-c178ba00-2289-11ea-8899-67267a2a9f13.png?fbclid=IwAR30JZbX37cdVCAmEw8rQ-S6MVoIffRwxr3y23iEqRkaG6Dp1o5-XGnYlEw)
![Last Screen](https://user-images.githubusercontent.com/49482201/70845913-c226e000-1e86-11ea-93dd-47dd106a18bf.png)

## Features
- Login logout with account
- Order food
- Display empty table
- Payment and see history bill
- See infomation each of bill

## Requirements
- React Native
- NodeJS
- Yarn

## Setup instructions
* First you need an IDE such as: [Visual Studio Code](https://code.visualstudio.com/)
* Next
```
git clone https://github.com/lylinsunshine/OrderFoodForTableAndroidApp.git
cd OrderFoodForTableAndroidApp
```
* You need nstall dependencies: `npm install` on **TERMINAL** or use hot key `Ctrl + Shift + ``

### Android

* You might need to do this to run it in Android Studio or on real device: `adb reverse tcp:8081 tcp:8081`
* If you run this app in emulator to test you need connect with `adb connect 127.0.0.1:62001` (for [Nox](https://vn.bignox.com/))
* And for the sample server: `adb reverse tcp:3000 tcp:3000`
* To run from command line try:
```
npm react-native start
npm react-native run-android
```
Or you can see **NPM SCRIPTS** on left bar and click 
> android

### iOS
Similar as Android but try
```
npm react-native start
npm react-native run-ios
```
Or you can see **NPM SCRIPTS** on left bar and click 
> ios
