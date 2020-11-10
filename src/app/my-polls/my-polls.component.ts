import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { GorillaPollService } from '../gorilla-poll.service';
import { Poll } from '../model/Poll';

@Component({
  selector: 'app-my-polls',
  templateUrl: './my-polls.component.html',
  styleUrls: ['./my-polls.component.css']
})
export class MyPollsComponent implements OnInit {

  displayedColumns: string[] = ['date', 'id', 'question'];

  polls: Poll[];

  constructor(private gorillaPoll: GorillaPollService, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.gorillaPoll.getUserPolls(user.email).subscribe(data => {
        console.log(data);
        this.polls = data;
      });
    })
  }

}
