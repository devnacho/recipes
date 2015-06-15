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
      recipe: this.props.data.recipe,
    };
  },

  componentDidMount: function() {
    var that = this;
    flux.store("RecipeStore").on('change', function(){
      that.setState({ recipe: flux.store("RecipeStore").getRecipeState(that.props.recipe) });
    });
  },

  _removeRecipe: function(recipe) {
    this.props.navigator.pop();
    flux.actions.removeRecipe(recipe);
  },

  render: function() {
    if(typeof this.state.recipe != 'undefined'){
      return this._renderRecipeListItem(this.state.recipe);
    }else{
      return this._renderRemovedItem();
    }
  },

  _renderRecipeListItem: function(recipe) {
    return (
      <ScrollView>
        <Text>
          { recipe.title }
        </Text>
        <Text>
          { recipe.description }
        </Text>

        <TouchableHighlight onPress={ () => this._removeRecipe(recipe) } activeOpacity={ 100 } underlayColor="#ea4b54">
          <Text>
            Remove
          </Text>
        </TouchableHighlight>
      </ScrollView>
    );
  },

  _renderRemovedItem: function() {
    // This could be a big trash icon and nothing else
    // Leave this blank for now
    return (
      <ScrollView>
      </ScrollView>
    );
  }

});



module.exports = RecipeItem;