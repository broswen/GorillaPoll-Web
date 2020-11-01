import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GorillaPollService } from '../gorilla-poll.service';
import { Poll } from '../model/Poll';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})
export class NewPollComponent implements OnInit {

  poll: Poll;
  question: String = '';
  choices: String[] = [
    '',
  ];

  constructor(private router: Router, private gorillaPoll: GorillaPollService) { }

  ngOnInit(): void {
  }

  submit() {
    const poll = {
      question: this.question,
      choices: this.choices
    };
    console.log(poll);
    this.gorillaPoll.postPoll(poll).subscribe(id => {
      console.log(`id: ${id}`)
      this.router.navigate(['/results', id]);
    });
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
