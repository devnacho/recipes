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

var RecipesList = require('./RecipesList')

var NavigatorComponent = React.createClass({

  render: function() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: RecipesList,
          title: 'Recipes'
        }}
        style={styles.wrapper}
        barTintColor="#7549ae"
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

module.exports = NavigatorComponent;