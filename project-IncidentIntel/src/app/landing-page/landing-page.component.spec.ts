import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let router: Router;

  // Setup the testing module
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  // Initialize the component and router before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  // Test to check if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test to validate navigation to the login page
  it('should navigate to login page', () => {
    spyOn(router, 'navigate');
    component.navigateSignInPage();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  // ...existing code...
});
