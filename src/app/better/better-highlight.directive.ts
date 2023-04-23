import { Directive, Renderer2  , OnInit , ElementRef , HostListener , HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor : string = 'transparent';
  @Input() highlightColor : string = 'blue';



  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  

  @HostListener('mouseenter') mouseover(dataE: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color' , 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(dataE: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color' , 'transparent');
    this.backgroundColor = this.defaultColor;
  }

  constructor(private elRef: ElementRef,  private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor= this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color' , 'blue');
  }

}
