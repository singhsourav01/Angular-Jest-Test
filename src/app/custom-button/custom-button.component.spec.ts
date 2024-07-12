import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomButtonComponent } from './custom-button.component';
import { By } from '@angular/platform-browser';

describe('CustomButtonComponent', () => {
  let component: CustomButtonComponent;
  let fixture: ComponentFixture<CustomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // .toBeFalsy-> to make it falsy
    expect(component).toBeTruthy();
  });
  it('renders custom error message', () => {
    component.message = 'Email is already taken';
    fixture.detectChanges();
    const messageContainer = fixture.debugElement.query(By.css('[data-testid="message-container"]'));
    expect(messageContainer.nativeElement.textContent).toBe('Email is already taken');//
  });

  it('renders custom error message', ()=>{
    component.test = 'Working';
    fixture.detectChanges();
    const elemContainer = fixture.debugElement.query(By.css('[id="jest-testing"]')) 
    expect(elemContainer.nativeElement.textContent).toBe('Working');// Accepting multiple id which shouldn't
  })

  
});
