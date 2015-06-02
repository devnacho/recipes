'use strict';

var Fluxxor = require('fluxxor');

var RecipeStore = Fluxxor.createStore({

  initialize: function() {
    this.recipes = [];
    return this.bindActions(constants.ADD_RECIPE_SUCCESS, this.onAddRecipeSuccess,
                            constants.UPDATE_RECIPE_SUCCESS, this.onUpdateRecipeSuccess,
                            constants.REMOVE_RECIPE_SUCCESS, this.onRemoveRecipeSuccess,
                            constants.LOAD_RECIPES_SUCCESS, this.onLoadRecipesSuccess,
                            constants.SET_CURRENT_RECIPE, this.onSetCurrentRecipe);
  },

  onLoadRecipesSuccess: function(payload) {
    this.recipes = payload.recipes;
    this.currentRecipeIndex = 0;
    return this.emit('change');
  },

  onAddRecipeSuccess: function(payload) {
    this.currentRecipeIndex = this;
    this.recipes.push(payload.recipe);
    this.currentRecipeIndex = this.recipes.length - 1;
    return this.emit('change');
  },

  onUpdateRecipeSuccess: function(payload) {
    this.recipes[this.currentRecipeIndex] = payload.recipe;
    return this.emit('change');
  },

  onRemoveRecipeSuccess: function(payload) {
    this.recipes.splice(this._indexOfRecipe(payload.recipe), 1);
    this.currentRecipeIndex = null;
    return this.emit('change');
  },

  onSetCurrentRecipe: function(payload) {
    this.currentRecipeIndex = this._indexOfRecipe(payload.recipe);
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
      recipes: this.recipes,
      currentRecipe: this.currentRecipeIndex != null ? this.recipes[this.currentRecipeIndex] : null
    };
  }
});
