import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const CREATE_PROGRAM_URL = "https://edacy-api-v2-test.herokuapp.com/programs";
interface Program {
  id?: string,
  title: string,
  description: string,
  level: Array<string>,
  type: Array<string>,
  videoUrl?: string,
}

interface programsQuery {
  fetchMyPrograms: Array<{
    id: string
  } | null> | null,
}

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private programsQuery = gql`
    query fetchMyPrograms {
      fetchMyPrograms {
        id
      }
    }
  `

  private progams: any;

  constructor(
    private httpClient: HttpClient,
    private apollo: Apollo) { }

  getPrograms() {
    this.apollo.watchQuery({query: this.programsQuery})
    .result().then((res) => {
    })
    .catch(() => false)
  }

  async create(program: Program | FormData) {
    const formData = new FormData()
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
  })

    formData.append('body', JSON.stringify({
      title: {en: "test"},
      description: {en: "test"},
      level: ['Beginner'],
      type: ['Foundation']
    }))
  
    this.httpClient.post(CREATE_PROGRAM_URL, formData, {headers})
    .toPromise()
    .then((res: any) => res)
    .catch(() => false)

  }
}
