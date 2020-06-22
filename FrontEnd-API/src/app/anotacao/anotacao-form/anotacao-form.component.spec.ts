import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotacaoFormComponent } from './anotacao-form.component';

describe('AnotacaoFormComponent', () => {
  let component: AnotacaoFormComponent;
  let fixture: ComponentFixture<AnotacaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotacaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotacaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
