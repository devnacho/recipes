'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} = React;


var GroceryNew = React.createClass({

  _addGroceryItem: function() {
    console.log( "Add grocery Item" );
  },

  render: function() {
    return (
      <View style={ styles.groceryNew }>
        <TextInput
          ref=""
          style={ styles.textInput }
          onChangeText={(text) => this.setState({name: text})}
          placeholder="Enter a grocery item and press enter..."
          autoCorrect={false}
          onSubmitEditing={ () => this._addGroceryItem() }
        />
      </View>
    );
  },
});


var styles = StyleSheet.create({
  groceryNew: {
    paddingTop: 25
  },
  textInput: {
    height: 40,
    fontSize: 15,
    color: "#666666",
    fontFamily: "Helvetica Neue",
  },
});

module.exports = GroceryNew;
