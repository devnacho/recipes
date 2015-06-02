/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Fluxxor = require('fluxxor');
var actions = require('./App/actions/actions');
var RecipeStore = require('./App/stores/RecipeStore');


var {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
} = React;

// Flux


console.log(actions);

var stores = {
  RecipeStore: RecipeStore
};

var flux = new Fluxxor.Flux(stores, actions);

var MainTabBar = require('./App/components/MainTabBar');

var NavigatorComponent = require('./App/components/NavigatorComponent');

AppRegistry.registerComponent('recipesApp', () => MainTabBar);

flux.actions.loadRecipes();

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});