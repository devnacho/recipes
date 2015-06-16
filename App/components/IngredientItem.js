'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


var IngredientItem = React.createClass({


  render: function() {
    return (
      <View style={styles.ingredientItem}>
        <Text style={styles.ingredientItemName}>
          {this.props.ingredient.name}
        </Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  ingredientItem: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
  ingredientItemName: {
    fontSize: 18,
    color: "#777",
    fontFamily: "Baskerville",
  }
});

module.exports = IngredientItem;