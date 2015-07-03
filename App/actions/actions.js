'use strict';

var Firebase = require('firebase-react-native');
var constants = require('../constants');
var flux = require('../flux');

var ref = new Firebase('fiery-torch-4859.firebaseIO.com');
var recipesRef = ref.child('recipes');
var groceriesRef= ref.child('groceries');

var actions = {
  startListeningRecipes: function() {
    this.dispatch(constants.LISTEN_RECIPES, {});
  },

  startListeningGroceries: function() {
    this.dispatch(constants.LISTEN_GROCERIES, {});
  },

  addRecipe: function(recipe) {
    recipesRef.push(recipe, function(error) {
      if (error !== null) {
        console.log(error.code);
      } else {
      }
    });
  },

  addGrocery: function(grocery) {
    groceriesRef.push(grocery, function(error) {
      if (error !== null) {
        console.log(error.code);
      } else {
      }
    });
  },

  removeRecipe: function(recipe) {
    recipesRef.child(recipe.id).remove();
  },


  addIngredientToRecipe: function(ingredient, recipe) {
    var ingredientsRef = recipesRef.child(recipe.id).child('ingredients');
    ingredientsRef.push(ingredient);
  }
};


module.exports = actions;
