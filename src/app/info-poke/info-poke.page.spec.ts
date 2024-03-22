import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPokePage } from './info-poke.page';

describe('InfoPokePage', () => {
  let component: InfoPokePage;
  let fixture: ComponentFixture<InfoPokePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoPokePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
