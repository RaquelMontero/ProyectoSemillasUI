import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeraportadorComponent } from './veraportador.component';

describe('VeraportadorComponent', () => {
  let component: VeraportadorComponent;
  let fixture: ComponentFixture<VeraportadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeraportadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeraportadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
