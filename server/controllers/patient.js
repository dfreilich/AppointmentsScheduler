let Patient = require('../models/patient');

let PatientController = {
  getAll: (req, res) => {
    Patient.find({}, (err, patients) => {
      if(err) {
        return res.status(400).json(err);
      } else {
        return res.json(patients);
      }
    })
  },
  get: (req, res) => {
    Patient.findOne({'_id': req.params.id}, (err, patient) => {
      if(err) {
        return res.status(400).json(err);
      } else {
        return res.json(patient);
      }
    })
  }
};

module.exports = PatientController;
