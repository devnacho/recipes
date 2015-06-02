'use strict';

var constants = require('../constants');
var flux = require('../flux');


var actions = {
  loadRecipes: function() {

    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/recipes', true);

    var that = this;

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var recipes = JSON.parse(request.responseText);
        that.dispatch(constants.LOAD_RECIPES_SUCCESS, {
          recipes: recipes
        });

      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  },
};


module.exports = actions;