import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContratosComponent } from './criar-contratos.component';

describe('CriarContratosComponent', () => {
  let component: CriarContratosComponent;
  let fixture: ComponentFixture<CriarContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarContratosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
