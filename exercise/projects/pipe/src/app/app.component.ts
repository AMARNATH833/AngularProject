import { Component, PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';
import { AgePipe } from 'projects/pipe/pipes/age.pipe';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
//   template:`<div>
//     <p>
//       Today date is {{dataToday | date:'O'}} 
//       <!-- 'mm:ss',:'shortTime',:'medium' -->

//     </p>
// </div>`
})

export class AppComponent{
  
  
  // dataToday:number=Date.now();
  upper="i am amarnath";
  lower="THIS IS ANGULAR FRAMEWORK"

  currentAmount=5161;
  decimal=123.4567;
  percentage=99;
}
