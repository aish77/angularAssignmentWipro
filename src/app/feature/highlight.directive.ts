import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.elementRef.nativeElement.addEventListener("mouseenter", function( event ) {   
      // highlight the mouseenter target
      event.target.style.background = "#337ab7";
    });
    this.elementRef.nativeElement.addEventListener("mouseleave", function( event ) {   
      // highlight the mouseenter target
      event.target.style.background = "";
    });
    // this.elementRef.nativeElement.style.background = '#337ab7';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgorund-color', 'blue', false);
}
}
