import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: ['./poll-results.component.css']
})
export class PollResultsComponent implements OnInit {

  id: Number;

  question = "What is the answer?";
  results = [
    {value: 'choice1', votes: 2},
    {value: 'choice2', votes: 3},
    {value: 'choice3', votes: 5},
  ];

  constructor(route: ActivatedRoute) { 
    route.params.subscribe(params => {
      this.id = params['id'];
    });

    console.log(`poll: ${this.id}`);
  }

  ngOnInit(): void {

    
  }

}
