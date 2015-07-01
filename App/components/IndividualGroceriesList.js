'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var GroceryItem = require('./GroceryItem');

var IndividualGroceriesList = React.createClass({

  render: function() {
    var rows = []
    for (var i = 0; i < this.props.items.length; i++) {
      rows.push(this.renderGroceryItem(this.props.items[i]))
    }
    return (
      <View>
        {rows}
      </View>
    );
  },

  renderGroceryItem: function(groceryItem) {
    return (
      <GroceryItem item={ groceryItem }></GroceryItem>
    );
  },
});



module.exports = IndividualGroceriesList;
