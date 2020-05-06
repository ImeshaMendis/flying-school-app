import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.sass']
})
export class AircraftsComponent implements OnInit {
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
  add_pop_up(event:any) {
    this.added = true;
  }
}