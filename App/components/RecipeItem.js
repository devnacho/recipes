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

  getInitialState: function() {
    return {
      recipe: this.props.recipe,
    };
  },

  componentDidMount: function() {
    var that = this;
    flux.store("RecipeStore").on('change', function(){
      that.setState({ recipe: flux.store("RecipeStore").getRecipeState(that.props.recipe) });
    });
  },

  _removeRecipe: function(recipe) {
    flux.actions.removeRecipe(recipe);
    this.props.navigator.pop();
  },

  render: function() {
    return (
      <ScrollView>
        <Text>
          { this.state.recipe.title }
        </Text>
        <Text>
          { this.state.recipe.description }
        </Text>

        <TouchableHighlight onPress={ () => this._removeRecipe(this.state.recipe) } activeOpacity={ 100 } underlayColor="#ea4b54">
          <Text>
            Remove
          </Text>
        </TouchableHighlight>
      </ScrollView>
    );
  },
});



module.exports = RecipeItem;