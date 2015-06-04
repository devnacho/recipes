'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} = React;


var RecipeNew = React.createClass({

  getInitialState: function() {
    return {
      title: '',
      description: '',
    };
  },

  render: function() {
    return (
      <ScrollView style={ styles.container }>
        <Text style={ styles.label }>
          Recipe Name
        </Text>
        <TextInput
          style={ styles.textInput }
          onChangeText={(text) => this.setState({title: text})}
          placeholder="Enter a recipe name..."
          autoCorrect={false}
        />
        <Text style={ styles.label }>
          Description
        </Text>
        <TextInput
          style={ styles.textArea }
          onChangeText={(text) => this.setState({description: text})}
          multiline={true}
          placeholder="Fill your description..."
          autoCorrect={false}
        />
      </ScrollView>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff505a",
    padding: 20
  },
  label: {
    color: "white",
    marginBottom: 10,
    fontSize: 25,
    fontFamily: "Baskerville"
  },
  textInput: {
    height: 40,
    marginBottom: 10,
    fontSize: 16,
    color: "#4b0b0e",
    fontFamily: "Helvetica Neue",
  },
  textArea: {
    height: 250,
    marginBottom: 10,
    fontSize: 16,
    color: "#4b0b0e",
    fontFamily: "Helvetica Neue",
  }

});



module.exports = RecipeNew;