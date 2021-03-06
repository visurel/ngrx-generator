import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class {{ properCase name }}Service {
  
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get('https://api.com');
  }


}