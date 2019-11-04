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

import BillHistoryScreen from './screens/BillHistoryScreen';
import IndexScreen from './screens/IndexScreen';
import TableScreen from './screens/TableScreen';

import Navigator from './navigator/Navigator';

class App extends React.Component {
  render() {
    return <Navigator />;
  }
}

export default App;
