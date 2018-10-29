const expect = require('chai').expect;
const Doctor = require('../../models/doctor');
let doctor;

describe('Doctor Model', () => {
  it('Doctor needs a name', done => {
    doctor = new Doctor();
    doctor.validate((res) => {
      expect(res.errors.name.message).to.equal('Path `name` is required.');
      done();
    });
  });
});
