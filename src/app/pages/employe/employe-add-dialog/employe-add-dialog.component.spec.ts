import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeAddDialogComponent } from './employe-add-dialog.component';

describe('EmployeAddDialogComponent', () => {
  let component: EmployeAddDialogComponent;
  let fixture: ComponentFixture<EmployeAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
