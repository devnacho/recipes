'use strict';

var Firebase = require('firebase-react-native');
var constants = require('../constants');
var flux = require('../flux');

var ref = new Firebase('fiery-torch-4859.firebaseIO.com');
var recipesRef = ref.child('recipes');

var actions = {
  startListeningRecipes: function() {
    this.dispatch(constants.LISTEN_RECIPES, {});
  },

  addRecipe: function(recipe) {

    var that = this;

    recipesRef.push(recipe, function(error) {
      if (error !== null) {
        console.log(error.code);
      } else {

      }
    });
  },

  removeRecipe: function(recipe) {
    recipesRef.child(recipe.id).remove();
  },
};


module.exports = actions;