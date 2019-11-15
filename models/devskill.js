const devskills = [
    {devskill: 'HTML', yes: true},
    {devskill: 'CSS', yes: true},
    {devskill: 'Javscript', yes: true},
    {devskill: 'Node/Express', yes: false}

  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id){
    devskills.splice(id, 1);
  };
  
  function create(devskill){
    devskills.push(devskill);
  };

  function getAll() {
    return devskills;
  };

  function getOne(id) {
    return devskills[id];
  }