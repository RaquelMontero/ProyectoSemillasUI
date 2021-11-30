import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaraportadorComponent } from './listaraportador.component';

describe('ListaraportadorComponent', () => {
  let component: ListaraportadorComponent;
  let fixture: ComponentFixture<ListaraportadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaraportadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaraportadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
