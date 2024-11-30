import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test to check if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test to check the dropdown visibility toggle functionality
  it('should toggle dropdown visibility', () => {
    const element = {}; // Mock element
    expect(component.dropdownVisible).toBe(false);
    component.myFunction(element);
    expect(component.dropdownVisible).toBe(true);
    component.myFunction(element);
    expect(component.dropdownVisible).toBe(false);
  });
});
