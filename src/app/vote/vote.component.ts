import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  id: Number;
  question: String = "What is the answer?";
  selected;
  choices: String[] = [
    "choice0",
    "choice1",
    "choice2",
  ];

  constructor(route: ActivatedRoute) { 
    route.params.subscribe(params => {
      this.id = params['id'];
    });

    console.log(`poll: ${this.id}`);
  }

  ngOnInit(): void {
  }

  select(choice: Number) {
    console.log(`selected ${choice}`);
    this.selected = choice;
  }

  submit() {
    console.log(`submitting vote ${this.choices[this.selected]}`);
    this.selected = '';
  }
}
