import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetailsComponent } from './fetails.component';

describe('FetailsComponent', () => {
  let component: FetailsComponent;
  let fixture: ComponentFixture<FetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
