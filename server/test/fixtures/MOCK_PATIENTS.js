let Patient = require('../../models/patient');
let mock_pats = [];
mock_pats.push(new Patient({name: 'Henry'}));
mock_pats.push(new Patient({name: 'Angelina'}));
mock_pats.push(new Patient({name: 'Adira'}));
mock_pats.push(new Patient({name: 'Anshu'}));
mock_pats.push(new Patient({name: 'Cecile'}));
mock_pats.push(new Patient({name: 'Jeff'}));
mock_pats.push(new Patient({name: 'Doron'}));
mock_pats.push(new Patient({name: 'Helen'}));
mock_pats.push(new Patient({name: 'Debra'}));
mock_pats.push(new Patient({name: 'Abe'}));

module.exports = mock_pats;