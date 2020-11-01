import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})
export class NewPollComponent implements OnInit {

  question: String = '';

  choices: String[] = [
    '',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    const poll = {
      question: this.question,
      choices: this.choices
    };
    console.log(poll);
  }

  addChoice() {
    this.choices.push('');
  }

  removeChoice() {
    this.choices.pop();
  }

  trackByFn(index: any, item: any){
    return index;
  } 

}
