/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
} = React;

var MOCK_RECIPES = [{title: "Blue Cheese Burgers", description: "Salty blue cheese, sweet onions, and juicy beef are a classic and addictive combination. Cooking the onions is the most time-consuming part of this recipe, but be patient: Its worth it to coax out their deep, earthy flavor."},
                    {title: "Chicken Fingers", description: "These garlicky, lightly breaded chicken strips just require a buttermilk marinade before a quick saute. Teamed with your favorite dipping sauce or served alone"}]

var recipesApp = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(MOCK_RECIPES),
    };
  },

  render: function() {
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
      <View style={styles.recipeListItem}>
        <Text style={styles.recipeListItemTitle}>
          { recipe.title }
        </Text>
        <Text style={styles.recipeListItemDescription}>
          { recipe.description }
        </Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff505a',
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

AppRegistry.registerComponent('recipesApp', () => recipesApp);
