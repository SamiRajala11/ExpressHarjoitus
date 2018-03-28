var express = require('express');
var router = express.Router();

/* GET info page */
router.get('/Info', function(req, res, next) {
  res.render('info');
});

module.exports = router;
