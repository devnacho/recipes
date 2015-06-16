'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var IngredientNew = require('./IngredientNew');
var IngredientsList = require('./IngredientsList');


var Ingredients = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <IngredientNew></IngredientNew>
        <IngredientsList></IngredientsList>
      </View>
    );
  },
});


var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 25
  },


});

module.exports = Ingredients;