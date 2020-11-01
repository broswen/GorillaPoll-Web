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

  constructor(route: ActivatedRoute, private gorillaPoll: GorillaPollService) { 
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
    this.selected = '';
  }
}
