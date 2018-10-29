const expect = require('chai').expect;
const Appointment = require('../../models/appointment');
let appointment;

describe('Appointment Model', () => {
  it('Appointment needs a doctor, patient, date, startTime, and endTime', done => {
    appointment = new Appointment();
    appointment.validate((res) => {
      expect(res.errors.doctor.message).to.equal('Path `doctor` is required.');
      expect(res.errors.patient.message).to.equal('Path `patient` is required.');
      expect(res.errors.date.message).to.equal('Path `date` is required.');
      expect(res.errors.startTime.message).to.equal('Path `startTime` is required.');
      expect(res.errors.endTime.message).to.equal('Path `endTime` is required.');
      expect(Object.keys(res.errors).length).to.equal(5);
      done();
    });
  });
});
