import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerTabComponent } from './employer-tab.component';

describe('EmployerTabComponent', () => {
  let component: EmployerTabComponent;
  let fixture: ComponentFixture<EmployerTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
