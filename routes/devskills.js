var express = require('express');
var router = express.Router();
var Devskill = require('../models/devskill');
var devskillsCtrl = require('../controllers/devskills');

/* GET users listing. */
router.get('/', devskillsCtrl.index);
router.get('/:id', devskillsCtrl.show);

router.get('/devskills', function(req, res) {
  res.render('devskills/index', {
    devskills: devskillDb.getAll()
  });
});

module.exports = router;
