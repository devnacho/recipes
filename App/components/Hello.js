'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


var Hello = React.createClass({


  render: function() {
    return (
      <View>
        <Text>
          Hola!
        </Text>
      </View>
    );
  },
});



module.exports = Hello;