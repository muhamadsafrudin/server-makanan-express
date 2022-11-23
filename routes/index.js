var express = require('express');
var router = express.Router();

const access = require("../access")
const recipesController = require('../controllers/recipesController')


router.get('/recipes/:page', access.apiKey, recipesController.getRecipes);
router.get('/recipes-length', access.apiKey, recipesController.getRecipesLength);
router.get('/recipe/:key', access.apiKey, recipesController.getRecipeDetail);
router.get('/search-recipes', access.apiKey, recipesController.searchRecipes);
router.get('/category', access.apiKey, recipesController.getCategory);
router.get('/recipes-category/:category', access.apiKey, recipesController.getRecipesCategory);


module.exports = router;
