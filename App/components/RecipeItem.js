'use strict';

var React = require('react-native');
var flux = require('../flux');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} = React;


var RecipeItem = React.createClass({

  _removeRecipe: function(recipe) {
    flux.actions.removeRecipe(recipe);
    this.props.navigator.pop();
  },

  render: function() {
    return (
      <ScrollView>
        <Text>
          { this.props.recipe.title }
        </Text>
        <Text>
          { this.props.recipe.description }
        </Text>

        <TouchableHighlight onPress={ () => this._removeRecipe(this.props.recipe) } activeOpacity={ 100 } underlayColor="#ea4b54">
          <Text>
            Remove
          </Text>
        </TouchableHighlight>
      </ScrollView>
    );
  },
});



module.exports = RecipeItem;