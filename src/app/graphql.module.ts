import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApolloBoostModule
  ]
})
export class GraphqlModule {
  constructor(
    apolloBoost: ApolloBoost
  ) {
    apolloBoost.create({
      uri: 'https://edacy-api-v2-test.herokuapp.com/graphql',
      request: ((op: any) => {
        op.setContext({
          headers: {
            authorization: `Bearer ${localStorage.getItem('token-edacy')}`, 
          }
        })
      }) as any
    })
  }
 }
