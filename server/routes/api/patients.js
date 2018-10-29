'use strict';

let express = require('express');
let router = express.Router();
let Patient = require('../../controllers/patient');

router.get('/', Patient.getAll);
router.get('/:id', Patient.get);
//TODO: Add routes to add Patients

module.exports = router;