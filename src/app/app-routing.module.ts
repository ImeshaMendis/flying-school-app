import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { InstructorComponent } from './instructor/instructor.component';
import { AircraftsComponent } from './aircrafts/aircrafts.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [ 
  { path: 'student', component: StudentComponent }, 
  { path: 'instructor',  component: InstructorComponent },
  { path: 'aircraft',  component: AircraftsComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
