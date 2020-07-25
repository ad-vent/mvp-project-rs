const Recipe = require('../database/recipe');

const getUserInfo = (req, res) => {
  const user = req.param.username
  Recipe.find({ username: user })
    .exec((err, data) => {
      if (err) res.sendStatus(400);
      res.send(data);
    });
}

module.exports = {
  getUserInfo
}