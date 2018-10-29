import {HttpClient} from '@angular/common/http';
import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material';
import {Doctor, Patient, Appointment} from './types';
import {AppointmentsService} from './appointments.service';
import {MatDialog} from '@angular/material';
import {AddAppointmentModal} from "./addAppointmentModal.component";
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Appointments Manager';
  doctors: Doctor[];
  patients: Patient[];
  date: Date = new Date();
  doctor: Doctor = null;
  durations: number[] = [20, 40, 60];
  todaysAppointments: Appointment[] = [];
  displayedColumns: string[] = ['Date', 'Patient', 'Start Time', 'End Time'];

  //TODO: Configure sorting
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, private appointmentsService: AppointmentsService, private dialog: MatDialog, private cdRef: ChangeDetectorRef, public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.appointmentsService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
      if(doctors.length > 0) {
        this.doctor = doctors[0];
      }
      this.getAppointmentsForDay(this.doctor, this.date);
    });
    this.appointmentsService.getPatients().subscribe(patients => this.patients = patients);
  }

  getAppointmentsForDay(doctor: Doctor, date: Date) {
    this.appointmentsService.getAppointmentsForDay(this.doctor, this.date).subscribe(appointments => {
      this.todaysAppointments = appointments;
    });
  }

  getPatientName(id: Patient["_id"]): string {
    let patient = this.patients.find(x => x._id === id);
    if(patient) return patient.name;
    return null;
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddAppointmentModal, {
      width: '400px',
      data: {patients: this.patients, doctors: this.doctors, durations: this.durations}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.appointmentsService.makeAppointment(result).subscribe(res => {
        if(res.doctorId === this.doctor._id) {
          this.todaysAppointments.push(res);
          //TODO: Use cdRef instead of reloading the page, or set up page to use OnPush
          location.reload();
        }
      }, error => {
        //TODO: Make more robust error handling
        if(error.status === 400) {
          this.snackBar.open('That slot was taken. Please try again.');
        }
      })
    });
  }
}

