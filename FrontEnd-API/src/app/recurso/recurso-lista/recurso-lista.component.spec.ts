import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoListaComponent } from './recurso-lista.component';

describe('RecursoListaComponent', () => {
  let component: RecursoListaComponent;
  let fixture: ComponentFixture<RecursoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
