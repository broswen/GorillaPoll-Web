import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyPollsComponent } from './my-polls/my-polls.component';
import { NewPollComponent } from './new-poll/new-poll.component';
import { PollResultsComponent } from './poll-results/poll-results.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  { path: 'new', component: NewPollComponent },
  { path: 'profile', component: MyPollsComponent},
  { path: 'results/:id', component: PollResultsComponent },
  { path: 'poll/:id', component: VoteComponent },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
