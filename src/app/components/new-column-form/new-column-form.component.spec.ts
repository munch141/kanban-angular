import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { Column } from "src/app/models/column.model";

import { NewColumnFormComponent } from "./new-column-form.component";

describe("NewColumnFormComponent", () => {
  let component: NewColumnFormComponent;
  let fixture: ComponentFixture<NewColumnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewColumnFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewColumnFormComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should start as en empty form", () => {
    expect(component.columnForm.value.title).toBe("");
  });

  it("should emit the dismiss event when the dismiss button is pressed", () => {
    spyOn(component.dismiss, "emit");
    const dismissButton = fixture.nativeElement.querySelector(
      "button:not([type])"
    );

    dismissButton.click();

    expect(component.dismiss.emit).toHaveBeenCalled();
  });

  it("should emit the value entered on the input controls and dismiss the component", () => {
    spyOn(component.addColumn, "emit");
    spyOn(component.dismiss, "emit");
    const testTitle = "test title";
    const button = fixture.nativeElement.querySelector("button[type=submit]");
    const input = fixture.nativeElement.querySelector("input");
    input.value = testTitle;
    input.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    button.click();

    expect(component.addColumn.emit).toHaveBeenCalledWith(
      new Column(testTitle)
    );

    expect(component.dismiss.emit).toHaveBeenCalled();
  });
});
