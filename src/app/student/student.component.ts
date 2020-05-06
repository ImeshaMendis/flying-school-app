import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass']
})
export class StudentComponent implements OnInit {
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
