import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from './store/models/tutorial.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getTutorials(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>('http://localhost:4000/tutorials');
  }
}
