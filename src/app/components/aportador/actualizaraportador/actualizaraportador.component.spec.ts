import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaraportadorComponent } from './actualizaraportador.component';

describe('ActualizaraportadorComponent', () => {
  let component: ActualizaraportadorComponent;
  let fixture: ComponentFixture<ActualizaraportadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaraportadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizaraportadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
