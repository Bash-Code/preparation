import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetailsUserComponent } from './fetails-user.component';

describe('FetailsUserComponent', () => {
  let component: FetailsUserComponent;
  let fixture: ComponentFixture<FetailsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetailsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
