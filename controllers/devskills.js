var Devskill = require('../models/devskill');

module.exports = {
    index,
    show
  };
  

  function index(req, res) {
    res.render('devskills/index', {
      devskills: Devskill.getAll()
    });
  }

  function show(req, res) {
    res.render('devskills/show', {
      devskill: Devskill.getOne(req.params.id),
      devskillNum: parseInt(req.params.id) + 1
    });
  }