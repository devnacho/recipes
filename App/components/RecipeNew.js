'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;


var RecipeNew = React.createClass({


  render: function() {
    return (
      <ScrollView>
        <Text>
          New Recipe
        </Text>
      </ScrollView>
    );
  },
});



module.exports = RecipeNew;