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

  _pressTabItem: function(tabName) {
    this.setState({
      selectedTab: tabName
    });
  },

  render: function() {
    return (
      <TabBarIOS tintColor="black" barTintColor="white" style={styles.tabBar } >
        <TabBarIOS.Item title="Recipe" selected={ this.state.selectedTab === 'recipesTab' }
          onPress={() => {
            this._pressTabItem('recipesTab');
          }}>
          <NavigatorComponent></NavigatorComponent>
        </TabBarIOS.Item>

        <TabBarIOS.Item title="Groceries" selected={ this.state.selectedTab === 'groceriesTab' }
          onPress={
            () => {
            this._pressTabItem('groceriesTab');
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