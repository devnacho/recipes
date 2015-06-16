'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


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
      <View>
        {ingredientRows}
      </View>
    );
  },

  renderIngredientListItem: function(ingredient) {
    return (
      <View style={styles.ingredientListItem}>
        <Text>{ingredient.name}</Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({

  ingredientListItem: {
  },

});


module.exports = IngredientsList;