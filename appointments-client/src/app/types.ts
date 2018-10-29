export interface Doctor {
  _id: number,
  name: string
}

export interface Patient {
  _id: number,
  name: string
}

export interface Appointment {
  _id: number,
  doctorId: number,
  patientId: number,
  date: Date,
  startTime: Date,
  endTime: Date
}

export interface DialogData {
  patients: Patient[];
  doctors: Doctor[];
  durations: number[];
}
