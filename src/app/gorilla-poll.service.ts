import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of , throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NewPoll, Poll, VoteResponse } from './model/Poll';
import { Endpoint } from './Endpoint';

@Injectable({
  providedIn: 'root'
})
export class GorillaPollService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}

  getPoll(id: String) {
    return this.http.get<Poll>(`${Endpoint.endpoint}/results/${id}`);
  }

  getUserPolls(uid: String) {
    return this.http.get<Poll[]>(`${Endpoint.endpoint}/user/${uid}`);
  }

  postPoll(poll) {
    return this.http.post<NewPoll>(`${Endpoint.endpoint}/poll`, poll);
  }

  addVote(vote, id) {
    return this.http.post<VoteResponse>(
      `${Endpoint.endpoint}/poll/${id}`,
      vote);
  }
}
