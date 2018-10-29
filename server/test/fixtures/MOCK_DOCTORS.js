let Doctor = require('../../models/doctor');

let mock_docs = [];
mock_docs.push(new Doctor({name: 'David'}));
mock_docs.push(new Doctor({name: 'Jack'}));
mock_docs.push(new Doctor({name: 'Harry'}));

module.exports = mock_docs;