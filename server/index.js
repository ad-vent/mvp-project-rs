const express = require('express');
const bodyParser = require('body-parser');

const controller = require('/server/controller');

const PORT = 4444;
const app = express();

app.use(bodyParser.json());

app.get('/api/:username', controller.getUserInfo);

app.listen(PORT, () => {
  console.log(`Running on PORT: $(PORT)`)
});