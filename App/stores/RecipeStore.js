'use strict';

var Fluxxor = require('fluxxor');
var Firebase = require('firebase');
var ref = new Firebase('fiery-torch-4859.firebaseIO.com');
var recipesRef = ref.child('recipes');


var RecipeStore = Fluxxor.createStore({

  initialize: function() {
    this.recipes = [];
    this.bindActions(
      "LISTEN_RECIPES", this.listenToRecipes
    );
  },

  listenToRecipes: function(payload, type) {
    recipesRef.on('value', this.updateRecipes.bind(this));
    return this.emit('change');
  },

  updateRecipes: function(recipesSnapshot) {
    var recipes = [];
    recipesSnapshot.forEach(function(recipeData) {
      var recipe = recipeData.val();
      recipe.id = recipeData.key();
      recipes.unshift(recipe);
    });

    this.recipes = recipes;

    return this.emit('change');
  },

  getState: function() {
    return {
      recipes: this.recipes
    };
  }
});

module.exports = RecipeStore;