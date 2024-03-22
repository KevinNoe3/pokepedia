import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPokePage } from './registro-poke.page';

describe('RegistroPokePage', () => {
  let component: RegistroPokePage;
  let fixture: ComponentFixture<RegistroPokePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroPokePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
