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

var RecipeList = require('./App/components/RecipeList')

AppRegistry.registerComponent('recipesApp', () => RecipeList);
