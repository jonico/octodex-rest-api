const express = require('express');
const octocats = require('../services/octocats');
const router = new express.Router();
 
router.get('/', async (req, res, next) => {
  let options = { 
  };


  try {
    const result = await octocats.buildYourOwnOctodexApi(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;