import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
 
  @HostListener('error') handleError(): void{
    const nativeElement = this.hostElement.nativeElement;
    nativeElement.src = '../../../assets/images/error-advice.webp';
  }

  constructor(private hostElement: ElementRef) {

   }

}
