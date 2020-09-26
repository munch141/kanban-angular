import { AfterContentInit, Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[autofocus]",
})
export class AutofocusDirective implements AfterContentInit {
  @Input() public autofocus: boolean;

  constructor(private el: ElementRef) {}

  public ngAfterContentInit() {
    this.el.nativeElement.focus();
  }
}
