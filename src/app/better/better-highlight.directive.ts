import { Directive, Renderer2  , OnInit , ElementRef , HostListener , HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {


  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  

  @HostListener('mouseenter') mouseover(dataE: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color' , 'blue');
    this.backgroundColor = 'blue'
  }
  @HostListener('mouseleave') mouseleave(dataE: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color' , 'transparent');
    this.backgroundColor = 'transparent'
  }

  constructor(private elRef: ElementRef,  private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color' , 'blue');
  }

}