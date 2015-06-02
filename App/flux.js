'use strict';

var constants = require('./constants');
var RecipeStore = require('./stores/RecipeStore');
var actions = require('./actions/actions');
var Fluxxor = require('fluxxor');

var stores = {
  RecipeStore: new RecipeStore()
};

var flux = new Fluxxor.Flux(stores, actions);



module.exports = flux;