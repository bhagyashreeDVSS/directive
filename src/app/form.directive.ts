import { Type } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { __values } from 'tslib';

@Directive({
  selector: '[appForm]'
})
export class FormDirective  {
  inputElement: ElementRef;
  @Input('appForm') appForm!: string;


  constructor(private elementRef:ElementRef) {
this.inputElement = elementRef;
  }

  key:any;

  @HostListener('appForm' ,['$event']) onInput(event: KeyboardEvent)
{
  if(this.appForm === 'key'){
    this.key(event);
  }
  else if(this.appForm === 'nospace') {
this.nospace(event);
  }
}
 

  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    this.key = event.keyCode;
    console.log(this.key);
    if ((this.key >= 15 && this.key <= 64) || (this.key >= 123) || (this.key >= 96 && this.key <= 105)) {
      event.preventDefault();
    }else if(this.key >=48 && this.key <=57){
event.preventDefault()
    }
  }


nospace(event: KeyboardEvent){
  console.log("cominggg");
  
  const input = event.target as HTMLInputElement;
  let trimmed = input.value.replace(/\s+/g, '');
}
  // @HostListener('input', ['$event.target.value.no'])
  // onInput(value: string) {
  //  console.log("hhhhhhh");
  // }


// integeronly(event: KeyboardEvent){
//   const e = <KeyboardEvent>event;
//   if (e.key === 'Tab' || e.key === 'TAB') {
//       return;
//   }
//   if ([46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
//       // Allow: Ctrl+A
//       (e.keyCode === 65 && e.ctrlKey === true) ||
//       // Allow: Ctrl+C
//       (e.keyCode === 67 && e.ctrlKey === true) ||
//       // Allow: Ctrl+V
//       (e.keyCode === 86 && e.ctrlKey === true) ||
//       // Allow: Ctrl+X
//       (e.keyCode === 88 && e.ctrlKey === true)) {
//       // let it happen, don't do anything
//       return;
//   }
//   if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].indexOf(e.key) === -1) {
//       e.preventDefault();
//   }
// }

}

