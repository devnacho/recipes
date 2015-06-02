/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
} = React;

var MainTabBar = require('./App/components/MainTabBar')

var NavigatorComponent = require('./App/components/NavigatorComponent')

AppRegistry.registerComponent('recipesApp', () => MainTabBar);
