import { Directive,ElementRef,HostListener } from "@angular/core";

@Directive({
    selector:'[app-wire]'
})

export class wire{
    constructor(private message:ElementRef){}

    @HostListener('mouseenter') onMouseEnter(){
        this.highlight('yellow');
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.highlight('');
    }

    private highlight(color:string)
    {
        this.message.nativeElement.style.backgroundColor=color;
    }
}