let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AppointmentSchema = Schema({
  doctorId: {type: Schema.Types.ObjectId, ref: 'Doctor', required: true},
  patientId: {type: Schema.Types.ObjectId, ref: 'Patient', required: true},
  date: {type: Date, required: true},
  startTime: {type: Date, required: true},
  endTime: {type: Date, required: true},
});

let Appointment = mongoose.model('Appointment', AppointmentSchema);


module.exports = Appointment;