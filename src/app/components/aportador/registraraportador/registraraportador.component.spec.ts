import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraraportadorComponent } from './registraraportador.component';

describe('RegistraraportadorComponent', () => {
  let component: RegistraraportadorComponent;
  let fixture: ComponentFixture<RegistraraportadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraraportadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraraportadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
