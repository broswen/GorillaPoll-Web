import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Poll } from './model/Poll';

@Injectable({
  providedIn: 'root'
})
export class GorillaPollService {

  constructor() { }

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

  postPoll(poll) {
    return 200;
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

  Vote(vote): Number {
    let rand = Math.random()*3;
    if (rand < 1) {
      return 500;
    } if (rand < 2) {
      return 400;
    } 
    return 200;
  }
}
