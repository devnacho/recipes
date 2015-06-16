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
        <IngredientNew recipe={ this.props.recipe }></IngredientNew>
        <IngredientsList ingredients={ this.props.recipe.ingredients }></IngredientsList>
      </View>
    );
  },
});


var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },


});

module.exports = Ingredients;