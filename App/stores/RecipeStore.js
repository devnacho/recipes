'use strict';

var Fluxxor = require('fluxxor');
var Firebase = require('firebase-react-native');
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

  _indexOfRecipe: function(recipe) {
    var recipeIds = this.recipes.map(function(recipe) {
      return recipe.id;
    });
    return recipeIds.indexOf(recipe.id);
  },

  getState: function() {
    return {
      recipes: this.recipes
    };
  },

  getRecipeState: function(recipe) {
    return this.recipes[this._indexOfRecipe(recipe)];
  }
});

module.exports = RecipeStore;