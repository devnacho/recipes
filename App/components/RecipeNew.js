'use strict';

var React = require('react-native');
var flux = require('../flux');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight
} = React;


var RecipeNew = React.createClass({

  getInitialState: function() {
    return {
      title: '',
      description: '',
    };
  },

  handleSubmit: function() {
    if(this.state.title != ''){
      flux.actions.addRecipe({
        title: this.state.title,
        description: this.state.description
      });
      this.props.navigator.pop();
    }
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
        <TouchableHighlight style={ styles.saveButton } onPress={ () => this.handleSubmit() } activeOpacity={ 100 } underlayColor="#ea4b54">
          <Text style={ styles.saveButtonText }>
            Save
          </Text>
        </TouchableHighlight>
      </ScrollView>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20
  },
  label: {
    color: "#ff505a",
    marginBottom: 10,
    fontSize: 23,
    fontFamily: "Baskerville"
  },
  textInput: {
    height: 40,
    marginBottom: 10,
    fontSize: 15,
    color: "#666666",
    fontFamily: "Helvetica Neue",
  },
  textArea: {
    height: 250,
    marginBottom: 10,
    fontSize: 15,
    color: "#666666",
    fontFamily: "Helvetica Neue",
  },
  saveButton: {
    backgroundColor: "#ff505a",
    padding: 15,
  },
  saveButtonText: {
    textAlign: "center",
    fontSize:16,
    color: "white",

  }


});



module.exports = RecipeNew;