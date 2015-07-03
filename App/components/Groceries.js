'use strict';

var React = require('react-native');
var flux = require('../flux');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var IndividualGroceriesList = require('./IndividualGroceriesList');
var RecipesGroceriesList = require('./RecipesGroceriesList');
var GroceryNew = require('./GroceryNew');

var Groceries = React.createClass({

  getInitialState: function(){
    return {
      groceries: [],
    }
  },

  getDefaultProps: function(){
    return {
      individualItems: [{ name: "Eggs" }, { name: "Bread" }, { name: " Meat " }],
    }
  },

  componentDidMount: function() {
    var that = this;
    flux.store("GroceryStore").on('change', function(){
      that.setState( flux.store("GroceryStore").getState() );
    });
  },

  render: function() {
    return (
      <ScrollView style={ styles.container }>
        <GroceryNew></GroceryNew>
        <IndividualGroceriesList items={ this.state.groceries }></IndividualGroceriesList>
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

