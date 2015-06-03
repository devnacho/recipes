/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var MainTabBar = require('./App/components/MainTabBar');
var NavigatorComponent = require('./App/components/NavigatorComponent');
var flux = require('./App/flux');


var {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
} = React;

// Flux

flux.actions.startListeningRecipes();

AppRegistry.registerComponent('recipesApp', () => MainTabBar);


flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});
