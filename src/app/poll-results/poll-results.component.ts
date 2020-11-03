import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GorillaPollService } from '../gorilla-poll.service';
import { Poll } from '../model/Poll';

@Component({
  selector: 'app-poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: ['./poll-results.component.css']
})
export class PollResultsComponent implements OnInit {

  id: String;
  scheme = {
    domain: ['#00FF00', '#00FFFF', '#A10A28', '#00CED1', '#064DE0']
  };
  poll: Poll = {id: '', question: '', choices: []};

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

}
