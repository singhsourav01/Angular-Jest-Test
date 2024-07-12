import { Injectable } from '@angular/core';
import { UserInterface } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class JestServiceService {
  users: UserInterface[] = [];

  addUser(user: UserInterface): void{
    this.users = [...this.users, user];
  }
}
