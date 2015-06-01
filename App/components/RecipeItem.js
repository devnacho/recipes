'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;


var RecipeItem = React.createClass({

  render: function() {
    return (
      <ScrollView>
        <Text>
          { this.props.recipe.title }
        </Text>
        <Text>
          { this.props.recipe.description }
        </Text>
      </ScrollView>
    );
  },
});



module.exports = RecipeItem;