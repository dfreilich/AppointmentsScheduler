let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Simplified Doctor Schema
let DoctorSchema = Schema({
  name: { type: String, required: true },
});

let Doctor = mongoose.model('Doctor', DoctorSchema);


module.exports = Doctor;