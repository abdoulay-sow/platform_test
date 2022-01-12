import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const POST_IMAGE_URL = 
  "https://edacy-api-v2-test.herokuapp.com/program"
@Injectable({
  providedIn: 'root'
})
export class UploadMediaService {

  constructor(private http: HttpClient) { 
    
  }

  uploadProgramImage(image: File) {
    this.http.post(POST_IMAGE_URL, {
      poster: image
    })
    .toPromise()
    .then((res: any) => {
      
    })
    .catch(() => false)
  }
}
