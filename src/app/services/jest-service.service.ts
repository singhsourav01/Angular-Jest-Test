import { inject, Injectable } from '@angular/core';
import { UserInterface } from '../interface/user.interface';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class JestServiceService {
  utilsService = inject(UtilityService);
  users: UserInterface[] = [];
  addUser(user: UserInterface): void{
    this.users = [...this.users, user];
  }
  // getUsername(): string[]{
  //   return this.utilsService.
  // }

}
