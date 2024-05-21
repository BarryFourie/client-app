import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrostatBtnComponent } from './entrostat-btn.component';

describe('EntrostatBtnComponent', () => {
  let component: EntrostatBtnComponent;
  let fixture: ComponentFixture<EntrostatBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrostatBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrostatBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
