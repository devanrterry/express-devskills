var express = require('express');
var router = express.Router();
var Devskill = require('../models/devskill');
var devskillsCtrl = require('../controllers/devskills');

/* GET users listing. */
router.get('/', devskillsCtrl.index);
router.get('/new', devskillsCtrl.new);
router.get('/:id', devskillsCtrl.show);
router.post('/', devskillsCtrl.create);
router.delete('/:id', devskillsCtrl.delete);

router.get('/devskills', function(req, res) {
  res.render('devskills/index', {
    devskills: devskillDb.getAll()
  });
});

module.exports = router;
