import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

interface UserProfile {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}
interface RegisterMutation {
  registerUser: {
    user: {
      profile: UserProfile
    },
    opt: {
      isPlateformOwner: boolean
    }
  } | null
}

export interface User {
  id: string,
  user: {
    id: string,
    profile: {
      email: string,
      firstname: string,
      lastname: string,
    }
    isconfirmed: boolean,
  }
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | null = null;

  setUser(user: User) {
    this.user = user
  }

  getUser() {
    return this.user;
  }

  private registerMutation = gql`
    mutation registerUser {
      registerUser (opts: RegistrationOptsInput, user: CreateUserInput) {
        id
      }
    }
  `

  constructor(private apollo: Apollo) { }

  addUser(newUser: UserProfile) {

    const REGISTER_USER = gql`
      mutation registerUser {
        registerUser(opts: {isPlateformOwner: true}, user: {profile: {
          firstName: "${newUser.firstName}",
          lastName: "${newUser.lastName}",
          email: "${newUser.email}",
          password: "${newUser.password}",
          }}) {
          id
          token
        }
      }
    `;




    
    return this.apollo.mutate({
      mutation: REGISTER_USER
    })
      .toPromise()
      .then((data: any) => data)
      .catch(() => false)
  }

  login(email: string, password: string) {
    const LOGIN_USER = gql`
      mutation login {
        login(credentials: {
          email: "${email}",
          password: "${password}",
        }) 
        {
          id
          token
          user {
            id
            profile {
              firstName
              lastName
              email
            }
            isConfirmed
            source
          }
          createdAt
          updatedAt
        }
      }
    `;

    return this.apollo.mutate({
      mutation: LOGIN_USER
    })

      .toPromise()
      .then((data: any) => data)
      .catch(() => false)
  }

  getSessionByToken(token: string) {
    const FETCH_TOKEN = gql`
    query fetchSessionByToken {
      fetchSessionByToken(token: "${token}") {
        id
        createdAt
        updatedAt
        token
        user {
          id
          profile {
            firstName
            lastName
            email
          }
          isConfirmed
        }
      }
    }
    `
    return this.apollo.watchQuery({
      query: FETCH_TOKEN
    }).result().then((res: any) => {
      if (res.data) return res.data.fetchSessionByToken
      return res.data;
    })
    .catch(() => false)
  }

}
