'use strict';

var Fluxxor = require('fluxxor');

var RecipeStore = Fluxxor.createStore({

  initialize: function() {
    this.recipes = [];

    this.bindActions(
      "LOAD_RECIPES_SUCCESS", this.onLoadRecipesSuccess
    );
  },

  onLoadRecipesSuccess: function(payload, type) {
    this.recipes = payload.recipes;
    return this.emit('change');
  },

  onAddRecipeSuccess: function(payload) {
    this.recipes.push(payload.recipe);
    return this.emit('change');
  },

  onUpdateRecipeSuccess: function(payload) {
    this.recipes[this.currentRecipeIndex] = payload.recipe;
    return this.emit('change');
  },

  onRemoveRecipeSuccess: function(payload) {
    this.recipes.splice(this._indexOfRecipe(payload.recipe), 1);
    return this.emit('change');
  },

  _indexOfRecipe: function(recipe) {
    var recipeTitles;
    recipeTitles = this.recipes.map(function(recipe) {
      return recipe.title;
    });
    return recipeTitles.indexOf(recipe.title);
  },

  getState: function() {
    return {
      recipes: this.recipes
    };
  }
});

module.exports = RecipeStore;