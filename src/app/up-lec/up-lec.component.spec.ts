import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpLecComponent } from './up-lec.component';

describe('UpLecComponent', () => {
  let component: UpLecComponent;
  let fixture: ComponentFixture<UpLecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpLecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpLecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
