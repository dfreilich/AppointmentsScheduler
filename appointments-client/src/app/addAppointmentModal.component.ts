import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogData, Doctor, Patient} from "./types";
import * as moment from 'moment';

@Component({
  selector: 'add-appointment-dialog',
  templateUrl: 'addAppointmentModal.component.html',
})
export class AddAppointmentModal {
  doctor: Doctor;
  patient: Patient;
  date: Date = new Date();
  startTime = {hour: parseInt(moment().format("h"))+1, minute: 0, second: 0};
  duration: number;

  constructor(
    public dialogRef: MatDialogRef<AddAppointmentModal>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick() {
    if(this.doctor && this.patient) {
      let sTime = moment(this.startTime).format();
      let endTime = moment(sTime).clone().add(this.duration, 'minute').format();
      return {doctorId: this.doctor._id, patientId: this.patient._id, date: this.date, startTime: sTime, endTime: endTime};
    }
    return null;
  }

}
