import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GorillaPollService } from '../gorilla-poll.service';
import { Poll } from '../model/Poll';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  id: string;
  error: string;
  selected;
  poll: Poll = {id: '', uid: '', question: '', choices: []};

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private gorillaPoll: GorillaPollService,
    private snackbar: MatSnackBar) { 
    route.params.subscribe(params => {
      this.id = params['id'];
    });

    console.log(`poll: ${this.id}`);
  }

  ngOnInit(): void {
    this.getPoll();
  }

  getPoll(): void {
    this.gorillaPoll.getPoll(this.id)
      .subscribe(poll => {
        this.poll = poll;
      });
  }

  select(choice: Number) {
    console.log(`selected ${choice}`);
    this.selected = choice;
  }

  submit() {
    if (this.selected === undefined) return;

    const vote = {choice: this.poll.choices[this.selected].name};
    console.log(vote);

    this.gorillaPoll.addVote(vote, this.id)
      .subscribe(result => {
          this.router.navigate(['/results', this.id]);
      },
        error => {
          console.error(error);
          this.error = error.error.message;
          this.snackbar.open(this.error, 'OK', {duration:3000} );
      });
    this.selected = '';
  }
}
