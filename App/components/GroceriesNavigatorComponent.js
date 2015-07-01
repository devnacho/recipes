'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  NavigatorIOS,
} = React;

var Groceries = require('./Groceries')
var RecipeNew = require('./RecipeNew')



var GroceriesNavigatorComponent = React.createClass({

  render: function() {
    return (
      <NavigatorIOS
        ref="nav"
        initialRoute={{
          component: Groceries,
          title: 'Groceries',
        }}
        style={styles.wrapper}
        barTintColor="#46c9b9"
        titleTextColor="white"
        tintColor="#eaddfb"
      />
    );
  }

});


var styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});

module.exports = GroceriesNavigatorComponent;
