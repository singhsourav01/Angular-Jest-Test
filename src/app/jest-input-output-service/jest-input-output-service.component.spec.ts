import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JestInputOutputServiceComponent } from './jest-input-output-service.component';
import { pluck, rang } from './utils';
describe('abc', () => {
  let component: JestInputOutputServiceComponent;
  let fixture: ComponentFixture<JestInputOutputServiceComponent>;
  // rang
  describe('rang', ()=>{
    it('range 1 to 5', () =>{
      expect(rang(1, 5)).toEqual([1, 2, 3, 4])
    })
  })

  // pluck
  describe('pluck', ()=>{
    it('return the array', ()=>{
      const data = [
        {id: '1', name:"Sourav"},
        {id: '2', name:"Scalar"},
        {id: '3', name:"Techhub"}      
      ]
      expect(pluck(data, 'name')).toEqual(['Sourav', 'Scalar', 'Techhub'])
    })
  })

  // JestInputOutputServiceComponent
  beforeEach(() => {
     TestBed.configureTestingModule({
      imports: [JestInputOutputServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JestInputOutputServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
