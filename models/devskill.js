const devskills = [
    {devskill: 'HTML', yes: true},
    {devskill: 'CSS', yes: true},
    {devskill: 'Javscript', yes: true},
    {devskill: 'Node/Express', yes: false}

  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return devskills;
  };

  function getOne(id) {
    return devskills[id];
  }