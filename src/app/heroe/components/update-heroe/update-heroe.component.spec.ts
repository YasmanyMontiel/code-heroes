import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHeroeComponent } from './update-heroe.component';

describe('UpdateHeroeComponent', () => {
  let component: UpdateHeroeComponent;
  let fixture: ComponentFixture<UpdateHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHeroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
