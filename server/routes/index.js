const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(
    {
      greeting: 'hello'
    }
  );
})

router.get('/test', (req, res) => {
  res.json(
    {
      greeting2: 'hello2'
    }
  );
})

module.exports = router;