import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { InstructorComponent } from './instructor/instructor.component';
import { AircraftsComponent } from './aircrafts/aircrafts.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentComponent,
    InstructorComponent,
    AircraftsComponent,
    SidePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
