import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AutofocusDirective } from "./autofocus.directive";

@Component({
  template: ` <input autofocus />
    <input />`,
})
class TestComponent {}

describe("AutofocusDirective", () => {
  let fixture: ComponentFixture<TestComponent>;
  let focused: DebugElement;
  let unfocused: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [AutofocusDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges();

    focused = fixture.debugElement.query(By.css("input[autofocus]"));
    unfocused = fixture.debugElement.query(By.css("input:not([autofocus])"));
  });

  it("should create an instance", () => {
    const directive = new AutofocusDirective(focused);
    expect(directive).toBeTruthy();
  });

  it("should focus on only the autofocus element", () => {
    expect(focused.nativeElement).toBe(document.activeElement);
    expect(unfocused.nativeElement).not.toBe(document.activeElement);
  });
});
