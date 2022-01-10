import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

interface User {
  profile: {
    firstname: string,
    lastname: string,
  },
  email: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      profile: { firstname: "Abdoulaye", lastname: "SOW" },
      email: 'layesow1011@gmail.com'
    },
  ]

  

  constructor(private apollo: Apollo) { }

  addUser() {
    
  }

  getUser(): User[] {
    return this.users;
  }
}
