import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhobbiesComponent } from './myhobbies.component';

describe('MyhobbiesComponent', () => {
  let component: MyhobbiesComponent;
  let fixture: ComponentFixture<MyhobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyhobbiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
