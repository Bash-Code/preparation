import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmItemUserComponent } from './film-item-user.component';

describe('FilmItemUserComponent', () => {
  let component: FilmItemUserComponent;
  let fixture: ComponentFixture<FilmItemUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmItemUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmItemUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
