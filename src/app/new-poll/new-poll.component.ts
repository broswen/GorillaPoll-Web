import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { throwIfEmpty } from 'rxjs/operators';
import { GorillaPollService } from '../gorilla-poll.service';
import { Poll } from '../model/Poll';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})
export class NewPollComponent implements OnInit {

  error: string;
  profileJSON: Object;
  link: string;
  poll: Poll;
  uid: string;
  question: string = '';
  choices: string[] = [
    '',
  ];

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private gorillaPoll: GorillaPollService,
    private auth: AuthService,
    private snackbar: MatSnackBar) { }

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
      let snackBarRef = this.snackbar.open('Your poll was created', 'GO', {duration:10000} );
      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(['/results', this.link]);
      });
    },
      error => {
        console.error(error);
        this.error = error.error.message;
        this.snackbar.open(this.error, 'OK', {duration:3000} );
        
    });
  }

  addChoice() {
    if (this.choices.length >= 10) return;
    this.choices.push('');
  }

  removeChoice() {
    this.choices.pop();
  }

  trackByFn(index: any, item: any){
    return index;
  } 

}
