'use strict';

var constants = require('./constants');
var RecipeStore = require('./stores/RecipeStore');
var GroceryStore = require('./stores/GroceryStore');
var actions = require('./actions/actions');
var Fluxxor = require('fluxxor');

var stores = {
  RecipeStore: new RecipeStore(),
  GroceryStore: new GroceryStore()
};

var flux = new Fluxxor.Flux(stores, actions);



module.exports = flux;
