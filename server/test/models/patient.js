const expect = require('chai').expect;
const Patient = require('../../models/patient');
let patient;

describe('Patient Model', () => {
  it('Patient needs a name', done => {
    patient = new Patient();
    patient.validate((res) => {
      expect(res.errors.name.message).to.equal('Path `name` is required.');
      done();
    });
  });
});
