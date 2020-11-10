import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { GorillaPollService } from '../gorilla-poll.service';
import { Poll } from '../model/Poll';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})
export class NewPollComponent implements OnInit {

  error: String;
  profileJSON: Object;
  link: String;
  poll: Poll;
  uid: String;
  question: String = '';
  choices: String[] = [
    '',
  ];

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private gorillaPoll: GorillaPollService,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      console.log(user);
      this.uid = user['email'];
    })
  }

  submit() {
    const poll = {
      question: this.question,
      uid: this.uid,
      choices: this.choices
    };
    console.log(poll);
    this.gorillaPoll.postPoll(poll).subscribe(newpoll => {
      console.log(`id: ${newpoll.link}`)
      this.error = undefined;
      this.link = newpoll.link;
    },
      error => {
        console.error(error);
        this.error = error.error.message;
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
