'use strict';

var React = require('react-native');
var flux = require('../flux');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} = React;


var IngredientNew = React.createClass({

  getInitialState: function() {
    return {
      name: ''
    };
  },


  _addIngredient: function() {
    flux.actions.addIngredientToRecipe({name: this.state.name }, this.props.recipe);
    this.refs.IngredientNameTextInput.setNativeProps({text: ''})
  },

  render: function() {
    return (
      <View style={styles.ingredientNew}>
        <TextInput
          ref="IngredientNameTextInput"
          style={ styles.textInput }
          onChangeText={(text) => this.setState({name: text})}
          placeholder="Enter an ingredient and press enter..."
          autoCorrect={false}
          onSubmitEditing={ () => this._addIngredient() }
        />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  ingredientNew: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 25
  },
  textInput: {
    height: 40,
    fontSize: 15,
    color: "#666666",
    fontFamily: "Helvetica Neue",
  },
});




module.exports = IngredientNew;