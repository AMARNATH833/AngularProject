import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appBeauty]'
})
export class BeautyDirective {

  constructor(private ele:ElementRef) { 
    ele.nativeElement.style.color='blue';
    ele.nativeElement.style.border='10px solid green';
    ele.nativeElement.style.backgroundColor='red'
  }

}
