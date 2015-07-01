'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


var GroceryItem = React.createClass({


  render: function() {
    return (
      <View style={ styles.item }>
        <Text style={ styles.itemName }>
          { this.props.item.name }
        </Text>
      </View>
    );
  },
});


var styles = StyleSheet.create({
  item: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
  itemName: {
    fontSize: 18,
    color: "#777",
    fontFamily: "Baskerville",
  }
});

module.exports = GroceryItem;
