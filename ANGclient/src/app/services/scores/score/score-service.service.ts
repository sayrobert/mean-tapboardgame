import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth-service.service';

export interface ScoreModel {
  score: Number;
  date: Date;
  userId: String
}

@Injectable({
  providedIn: 'root'
})

export class ScoreService {
  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  private request(method: 'post'|'get', type: 'add'|'all', score?: ScoreModel): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`/game/${type}`, score );
    } else {
      base = this.http.get(`/game/${type}`);
    }

    const request = base.pipe(
      map((data) => {
        return data;
      })
    );
    return request;
  }

  public addScore(score: ScoreModel): Observable<any> {
    return this.request('post', 'add', score);
  }

  public getScores(): Observable<any> {
    console.log('get score service ok');
    return this.request('get', 'all');
  }
}