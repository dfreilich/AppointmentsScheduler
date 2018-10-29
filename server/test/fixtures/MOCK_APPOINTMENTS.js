let Appointment = require('../../models/appointment');
let mock_docs = require('./MOCK_DOCTORS');
let mock_pats = require('./MOCK_PATIENTS');
let moment = require('moment');
let mock_apts = [];

let date = moment().format("L");
let startTime = moment().startOf('hour');
let endTime = startTime.clone().add('20', 'minutes');

mock_apts.push(new Appointment({doctorId: mock_docs[0]._id, patientId: mock_pats[0]._id, date: date, startTime: startTime, endTime: endTime}));

mock_apts.push(new Appointment({doctorId: mock_docs[1]._id, patientId: mock_pats[1]._id, date: date, startTime: startTime, endTime: endTime}));

mock_apts.push(new Appointment({doctorId: mock_docs[2]._id, patientId: mock_pats[2]._id, date: date, startTime: startTime, endTime: endTime}));

module.exports = mock_apts;