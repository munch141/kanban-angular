import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";

import { NewColumnFormComponent } from "./new-column-form.component";

describe("NewColumnFormComponent", () => {
  let component: NewColumnFormComponent;
  let fixture: ComponentFixture<NewColumnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewColumnFormComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewColumnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    expect(component.columnTitle).toBeNull();
  });

  it("raises the addColumn event when submitting form", () => {
    component.columnTitle = "Test title";
    component.addColumn.subscribe((title: string) =>
      expect(title).toBe(component.columnTitle)
    );

    const elementRef: HTMLElement = fixture.nativeElement;
    elementRef.querySelector<HTMLElement>('button[type="submit"]').click();
  });
});
