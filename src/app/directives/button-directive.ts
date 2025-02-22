import {Directive, ElementRef} from '@angular/core';
@Directive({
  selector: '[my-button]',
})
export class ButtonDirective {
    constructor(private el: ElementRef){
        this.el.nativeElement.style.backgroundColor = 'yellow';

    }
}