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

var MOCK_RECIPES = [{title: "Risotto de Hongos"}, {title: "Chicken Parmesan"}]

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
        <Text style={styles.recipeListItemText}>
          { recipe.title }
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
  recipeListItemText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "Helvetica Neue",
    fontWeight: "300"
  }
});

AppRegistry.registerComponent('recipesApp', () => recipesApp);
