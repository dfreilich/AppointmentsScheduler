let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let validator = require('validator');

//Simplified Patient Schema, with contact information for future use, but no medical information, for HIPAA concerns.
let PatientSchema = Schema({
  name: {type: String, required: true },
  number: {type: Number, validate:[validator.isMobilePhone, 'invalid number']},
  email: {type: String, validate: [validator.isEmail, 'invalid email']}
});

let Patient = mongoose.model('Patient', PatientSchema);


module.exports = Patient;