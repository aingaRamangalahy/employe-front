import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUpdateDialogComponent } from './service-update-dialog.component';

describe('ServiceUpdateDialogComponent', () => {
  let component: ServiceUpdateDialogComponent;
  let fixture: ComponentFixture<ServiceUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
