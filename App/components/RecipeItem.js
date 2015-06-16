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
      <ScrollView style={styles.container}>
        <View style={styles.recipeHeader}>
          <Text style={styles.recipeTitle}>
            { recipe.title }
          </Text>
          <Text style={styles.recipeDescription}>
            { recipe.description }
          </Text>
        </View>



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

// This was temporarily removed from _renderRecipeListItem
// <TouchableHighlight onPress={ () => this._removeRecipe(recipe) } activeOpacity={ 100 } underlayColor="#ea4b54">
//   <Text>
//     Remove
//   </Text>
// </TouchableHighlight>

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  recipeHeader: {
    backgroundColor: '#ff505a',
    padding: 25,
    paddingBottom:45
  },
  recipeTitle: {
    fontSize: 25,
    color: "#FFF",
    fontFamily: "Baskerville",
    fontWeight: "300",
    marginBottom: 5,
  },
  recipeDescription: {
    fontSize: 13,
    color: "#4b0b0e",
    fontFamily: "Helvetica Neue",
    lineHeight: 20,
  }

});



module.exports = RecipeItem;