/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Navigator from './navigator/SwitchNavigator';

class App extends React.Component {
  render() {
    return <Navigator />;
    //createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);
    //use initial routename for start page
    //default is drawer navigationrea
  }
}

export default App;
