import { TestBed } from '@angular/core/testing';
import { JestServiceService } from './jest-service.service';
import { UserInterface } from '../interface/user.interface';

describe('JestServiceService', () => {
  let service: JestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JestServiceService],
    });
    service = TestBed.inject(JestServiceService);
  });
  // Testing for custom Service 
  describe(' Adding User', ()=>{
    it('Add user', ()=>{
      const  user : UserInterface = {
        id : 1, 
        name: "Sourav",
      }
      service.addUser(user);
      expect(service.users).toEqual([{'id': 1, 'name': "Sourav"}]);
    })
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});