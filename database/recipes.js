const mongoose = require('mongoose');

const db = require('./index');

mongoose.Promise = global.Promise;

const recipesSchema = new mongoose.Schema({
  username: String,
  first_name: String,
  last_name: String,
  user_image: String,
  header: String,
  followers: [String],
  following: [String],
  recipes: [
    {
      image: String,
      ingredients: [String],
      description: String,
      date: Date,
      likes: Number,
      comments: [
        {
          text: String,
          likes: Number
        }
      ]
    }
  ]
});

const Recipe = mongoose.model('Recipes', reviewSchema);

module.exports = Recipe;