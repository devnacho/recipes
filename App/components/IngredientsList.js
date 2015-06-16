'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var IngredientItem = require('./IngredientItem');


var IngredientsList = React.createClass({

  render: function() {
    var ingredientRows = []
    for (var i = 0; i < this.props.ingredients.length; i++) {
      ingredientRows.push(this.renderIngredientListItem(this.props.ingredients[i]))
    }
    return (
      <View style={styles.ingredientsList}>
        {ingredientRows}
      </View>
    );
  },

  renderIngredientListItem: function(ingredient) {
    return (
      <IngredientItem ingredient={ ingredient } key={ ingredient.id } ></IngredientItem>
    );
  },
});

var styles = StyleSheet.create({
  ingredientsList: {
    padding: 25,
    paddingTop: 0,
  },
});


module.exports = IngredientsList;