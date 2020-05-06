import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.sass']
})
export class SidePanelComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  dashboard(route){
    console.log(route);
    this.router.navigate([route])
    .then(success => console.log('navigation success?' , success))
    .catch(console.error); 
  }
  student(route){
    this.router.navigate([route])
    .then(success => console.log('navigation success?' , success))
    .catch(console.error); 
  }
  aircraft(route){
    this.router.navigate([route])
    .then(success => console.log('navigation success?' , success))
    .catch(console.error); 
  }
  instructor(route){
    this.router.navigate([route])
    .then(success => console.log('navigation success?' , success))
    .catch(console.error); 
  }
}
