var Devskill = require('../models/devskill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
  };
  
  function deleteSkill(req, res){
    Devskill.deleteOne(req.params.id);
    res.redirect('/devskills');
  }

  function create(req, res){
    req.body.yes = false;
    Devskill.create(req.body);
    res.redirect('/devskills');
  }

  function newSkill(req, res){
    res.render('devskills/new');
  };

  function index(req, res) {
    res.render('devskills/index', {
      devskills: Devskill.getAll()
    });
  }

  function show(req, res) {
    res.render('devskills/show', {
      devskill: Devskill.getOne(req.params.id),
      devskillNum: parseInt(req.params.id) + 1,
      idx: req.params.id
    });
  }