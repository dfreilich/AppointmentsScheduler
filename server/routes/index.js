let express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express App running. Try navigating to /api to discover the api routes.' });
});

module.exports = router;