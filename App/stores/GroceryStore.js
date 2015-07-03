'use strict';

var Fluxxor = require('fluxxor');
var Firebase = require('firebase-react-native');
var ref = new Firebase('fiery-torch-4859.firebaseIO.com');
var groceriesRef= ref.child('groceries');


var GroceryStore = Fluxxor.createStore({

  initialize: function() {
    this.groceries = [];
    this.bindActions(
      "LISTEN_GROCERIES", this.listenToGroceries
    );
  },

  listenToGroceries: function(payload, type) {
    groceriesRef.on('value', this.updateGroceries.bind(this));
    return this.emit('change');
  },

  updateGroceries: function(groceriesSnapshot) {
    var groceries = [];
    groceriesSnapshot.forEach(function(groceryData) {
      var grocery = groceryData.val();
      grocery.id = groceryData.key();
      groceries.unshift(grocery);
    });

    this.groceries = groceries;

    return this.emit('change');
  },

  _indexOfGrocery: function(grocery) {
    var groceryIds = this.groceries.map(function(grocery) {
      return grocery.id;
    });
    return groceryIds.indexOf(grocery.id);
  },

  getState: function() {
    return {
      groceries: this.groceries
    };
  },

  getGroceryState: function(grocery) {
    return this.groceries[this._indexOfGrocery(grocery)];
  }
});

module.exports = GroceryStore;
