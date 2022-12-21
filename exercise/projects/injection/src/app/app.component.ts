import { Component } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BackendService]
})
export class AppComponent {
  title = 'injection';
  constructor(public backend:BackendService){
    console.log("yes Injector and service is get explained...")
  }
}
