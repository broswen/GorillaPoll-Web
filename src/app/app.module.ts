import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPollComponent } from './new-poll/new-poll.component';
import { PollResultsComponent } from './poll-results/poll-results.component';
import { VoteComponent } from './vote/vote.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { MyPollsComponent } from './my-polls/my-polls.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NewPollComponent,
    PollResultsComponent,
    VoteComponent,
    HomeComponent,
    AuthButtonComponent,
    MyPollsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-c84peibk.us.auth0.com',
      clientId: 'tOh8KRvDnJY9UZBwEzCXgUd5dWzSDHIG',
    }),
    FormsModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
