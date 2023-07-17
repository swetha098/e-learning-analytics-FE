import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnewComponent } from './anew.component';

describe('AnewComponent', () => {
  let component: AnewComponent;
  let fixture: ComponentFixture<AnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
