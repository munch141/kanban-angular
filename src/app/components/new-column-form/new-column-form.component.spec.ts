import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewColumnFormComponent } from './new-column-form.component';

describe('NewColumnFormComponent', () => {
  let component: NewColumnFormComponent;
  let fixture: ComponentFixture<NewColumnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewColumnFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewColumnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
