import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventBinding';

  control=true;

  constructor(){
    setTimeout(() => {
      this.control=false;
      console.log("button is enabled now!")
    }, 3000);
  }

  
}