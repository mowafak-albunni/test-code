import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalenderwochenComponent } from './kalenderwochen.component';

describe('KalenderwochenComponent', () => {
  let component: KalenderwochenComponent;
  let fixture: ComponentFixture<KalenderwochenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KalenderwochenComponent]
    });
    fixture = TestBed.createComponent(KalenderwochenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
