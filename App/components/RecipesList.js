'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableHighlight,
} = React;

var RecipeItem = require('./RecipeItem')

//Move to separate file so it can be required on other components
var MOCK_RECIPES = [{title: "Blue Cheese Burgers", description: "Salty blue cheese, sweet onions, and juicy beef are a classic and addictive combination. Cooking the onions is the most time-consuming part of this recipe, but be patient: Its worth it to coax out their deep, earthy flavor."},
                    {title: "Chicken Fingers", description: "These garlicky, lightly breaded chicken strips just require a buttermilk marinade before a quick saute. Teamed with your favorite dipping sauce or served alone"}]

var RecipesList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(MOCK_RECIPES),
    };
  },

  render: function() {
    console.log(this.props);
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={ this.renderRecipeListItem }
        style={styles.recipesList}
      />
    );
  },

  renderRecipeListItem: function(recipe) {
    return (
      <TouchableHighlight onPress={ () => this._pressItem(recipe) } activeOpacity={ 100 } underlayColor="#ea4b54">
        <View style={styles.recipeListItem}>
          <Text style={styles.recipeListItemTitle}>
            { recipe.title }
          </Text>
          <Text style={styles.recipeListItemDescription}>
            { recipe.description }
          </Text>
        </View>
      </TouchableHighlight>
    );
  },

  _pressItem: function(recipe) {
    console.log(recipe);
    this.props.navigator.push({
      title: recipe.title,
      component: RecipeItem,
      passProps: {recipe: recipe}
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipesList: {
    backgroundColor: "#ff505a"
  },
  recipeListItem: {
    padding: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#ff7880"
  },
  recipeListItemTitle: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Baskerville",
    fontWeight: "300",
    marginBottom: 5,
  },
  recipeListItemDescription: {
    fontSize: 13,
    color: "#4b0b0e",
    fontFamily: "Helvetica Neue",
    lineHeight: 20
  }
});


module.exports = RecipesList;