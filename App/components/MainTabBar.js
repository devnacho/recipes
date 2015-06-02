'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var NavigatorComponent = require('./NavigatorComponent')
var Hello = require('./Hello')


var MainTabBar = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'recipesTab'
    };
  },

  render: function() {
    return (
      <TabBarIOS tintColor="black" barTintColor="white">
        <TabBarIOS.Item title="Recipe" selected={ this.state.selectedTab === 'recipesTab' }
          onPress={() => {
            this.setState({
              selectedTab: 'recipesTab',
            });
          }}>
          <NavigatorComponent></NavigatorComponent>
        </TabBarIOS.Item>

        <TabBarIOS.Item title="Groceries" selected={ this.state.selectedTab === 'groceriesTab' }
          onPress={() => {
            this.setState({
              selectedTab: 'groceriesTab',
            });
          }}>
          <Hello></Hello>
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  },
});

var styles = StyleSheet.create({

});

module.exports = MainTabBar;