import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Doctor, Patient, Appointment} from './types';
import {HttpClient} from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  href = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getAppointmentsForDay(doctor: Doctor, date: Date): Observable<Appointment[]> {
    let dateStr = moment(date).format();
    return this.http.get<Appointment[]>(`${this.href}appointments/${doctor._id}/${dateStr}`);
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.href}doctors`);
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.href}patients`);
  }

  makeAppointment(appointment: Appointment) {
    return this.http.post<Appointment>(`${this.href}appointments/`, appointment);
  }

}
