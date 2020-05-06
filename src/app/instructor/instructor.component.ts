import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.sass']
})
export class InstructorComponent implements OnInit {
  added : boolean;
  constructor() { }

  ngOnInit() {
  }
  close_pop_up(event:any) {
    this.added = false;
    document.getElementById("pop-up").style.display = "none";
  }
  open_pop_up(event:any) {
    this.added = false;
    document.getElementById("pop-up").style.display = "block";
  }
}
