const express = require('express');
const app = express();
const api = require('./routes/index');

const port = 3002;

app.use('/api', api);

app.listen(port, () => console.log(`Listening on port ${post}`));