import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GorillaPollService } from '../gorilla-poll.service';
import { Poll } from '../model/Poll';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  id: String;
  selected;
  poll: Poll;

  constructor(private router: Router, route: ActivatedRoute, private gorillaPoll: GorillaPollService) { 
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
    console.log(this.poll.choices[this.selected].value);
    this.gorillaPoll.addVote(this.poll.choices[this.selected].value)
      .subscribe(result => {
        switch (result) {
          case 200:
            this.router.navigate(['/results', this.id]);
            break;
          case 400:
            console.log('400 error');
            break;
          case 500:
            console.log('500 error');
            break;
        }
      });
    this.selected = '';
  }
}
