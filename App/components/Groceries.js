'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var IndividualGroceriesList = require('./IndividualGroceriesList');
var RecipesGroceriesList = require('./RecipesGroceriesList');

var Groceries = React.createClass({

  getDefaultProps: function(){
    return {
      individualItems: [{ name: "Eggs" }, { name: "Bread" }, { name: " Meat " }],
    }
  },
  
  render: function() {
    return (
      <ScrollView style={ styles.container }>
        <IndividualGroceriesList items={ this.props.individualItems }></IndividualGroceriesList>
        <RecipesGroceriesList></RecipesGroceriesList>
      </ScrollView>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
    paddingRight: 25,
  },
});
module.exports = Groceries;

