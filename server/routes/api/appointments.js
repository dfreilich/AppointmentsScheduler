'use strict';

let express = require('express');
let router = express.Router();
let Appointment = require('../../controllers/appointment');

router.get('/', Appointment.getAll);
router.get('/:id', Appointment.getOne);
router.get('/:doctorId/:date', Appointment.getDailyScheduleOfDoctor);
router.post('/', Appointment.addAppointment);
//TODO: Add routes to adjust and delete Appointments

module.exports = router;