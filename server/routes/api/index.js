// Dependencies
let express = require('express');
let router = express.Router();
let patients = require('./patients');
let doctors = require('./doctors');
let appointments = require('./appointments');


router.get('/', function (req,res) {
  res.send('You\'ve entered the API. Query /doctors, /patients, or /appointments to discover more.');
});
//Serves different extensions of the API.
router.use('/doctors', doctors);
router.use('/patients', patients);
router.use('/appointments', appointments);

// Return router
module.exports = router;