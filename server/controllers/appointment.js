let moment = require('moment');
let Appointment = require('../models/appointment');

let AppointmentController = {
  getAll: (req, res) => {
    Appointment.find({}, (err, appointments) => basicCallback(res, err, appointments));
  },
  getOne: (req, res) => {
    Appointment.findOne({'_id': req.params.id}, (err, appointment) => basicCallback(res, err, appointment));
  },
  updateOne: (req, res) => {
    Appointment.findByIdAndUpdate(req.params.id, req.params, (err, appointment) => basicCallback(res, err, appointment));
  },
  deleteOne: (req, res) => {
    Appointment.findByIdAndDelete(req.params.id, (err, appointment) => basicCallback(res, err, appointment));
  },
  getDailyScheduleOfDoctor: (req, res) => {
    let day = moment(req.params.date).format('L');
    Appointment.find({doctorId: req.params.doctorId, date: day}, (err, appointments) => {console.log(appointments); basicCallback(res, err, appointments)});
  },
  addAppointment: (req, res) => {
    hasConflictingAppointment(req, (hasAppointment) => {
      if(hasAppointment) {
        return res.status(400).json('That slot is taken already.');
      } else {
        let appointment = new Appointment(req.body);
        appointment.date = moment(appointment.date).format('L');
        appointment.save((err, appointment) => {basicCallback(res, err, appointment)});
      }
    });
  }
};

function hasConflictingAppointment(req, callback) {
  //TODO: Add check to find out whether the patient also has a conflicting appointment with a different doctor
  Appointment.find({doctorId: req.body.doctorId,
    $or: [
      {$and: [
        {startTime: { $lte: req.body.startTime }},
        {endTime: { $gte: req.body.startTime}}
      ]},
      {$and: [
          {startTime: { $gte: req.body.startTime }},
          {startTime: { $lte: req.body.endTime }}
        ]},
    ]}, (err, appointments) => {
    if(err) {
      callback(err);
    } else {
      callback(!!appointments.length);
    }
  })
}

function basicCallback(res, err, val) {
  if(err) {
    return res.status(400).json(err);
  } else {
    return res.json(val);
  }
}

module.exports = AppointmentController;
