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
var RecipeNew = require('./RecipeNew')



var NavigatorComponent = React.createClass({

  navigateToNewRecipe: function() {
    this.refs.nav.push({
      title: 'New Recipe',
      component: RecipeNew,
    });
  },

  render: function() {
    return (
      <NavigatorIOS
        ref="nav"
        initialRoute={{
          component: RecipesList,
          title: 'Recipes',
          rightButtonTitle: 'New Recipe',
          onRightButtonPress: this.navigateToNewRecipe
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