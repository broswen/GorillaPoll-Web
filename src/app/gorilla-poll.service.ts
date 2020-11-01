import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Poll } from './model/Poll';

@Injectable({
  providedIn: 'root'
})
export class GorillaPollService {

  constructor(private http: HttpClient) { }

  getPoll(id: String): Observable<Poll>{
    return of({
      id: "123",
      question: "Is this the question?",
      choices: [
        {value: "yes", votes: 2},
        {value: "no", votes: 4},
        {value: "maybe", votes: 5},
      ]
    });
  }

  postPoll(poll): Observable<String> {
    return of("123");
  }

  getPollResults(id: String): Observable<Poll>{
    return of({
      id: "123",
      question: "Is this the question?",
      choices: [
        {value: "yes", votes: 2},
        {value: "no", votes: 4},
        {value: "maybe", votes: 5},
      ]
    });
  }

  addVote(vote): Observable<Number> {
    let rand = Math.random()*3;
    if (rand < 0.5) {
      return of(500);
    } if (rand < 1) {
      return of(400);
    } 
    return of(200);
  }
}
