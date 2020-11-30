const express = require('express');
const app = express();
const api = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Listening on port ${port}`));