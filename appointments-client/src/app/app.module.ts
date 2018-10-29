import { AppComponent } from './app.component';
import {AppointmentsService} from './appointments.service';
import { AddAppointmentModal } from "./addAppointmentModal.component";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule, MatSortModule, MatDialogModule, MatNativeDateModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgbTimepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    AddAppointmentModal,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSortModule,
    NgbTimepickerModule,
  ],
  providers: [
    AppointmentsService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddAppointmentModal]
})
export class AppModule { }
