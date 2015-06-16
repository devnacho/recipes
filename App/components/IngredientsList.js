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

  getDefaultProps: function() {
    return {
      //Replace this with real props
      ingredients: [{name: "Blue Cheese"}, {name: "Meat"}, {name: "Mustard"}],
    };
  },


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
      <IngredientItem ingredient={ ingredient } ></IngredientItem>
    );
  },
});

var styles = StyleSheet.create({
  ingredientsList: {
    padding: 25,
  },
});


module.exports = IngredientsList;