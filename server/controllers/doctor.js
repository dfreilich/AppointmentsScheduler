let Doctor = require('../models/doctor');

let DoctorController = {
  getAll: (req, res) => {
    Doctor.find({}, (err, doctors) => {
      if(err) {
        return res.status(400).json(err);
      } else {
        return res.json(doctors);
      }
    })
  },
  get: (req, res) => {
    Doctor.findOne({'_id': req.params.id}, (err, doctor) => {
      if(err) {
        return res.status(400).json(err);
      } else {
        return res.json(doctor);
      }
    })
  },
};

module.exports = DoctorController;
