/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { IdentityModel } from '../../models/identity.model';
  import { ApiResponseModel } from "../../models/api.reponse.model";
  import { AuthService } from "../../services/auth/auth-service.service";
  import { ScoreService, ScoreModel } from '../../services/scores/score/score-service.service';
  import { HttpClient } from '@angular/common/http';
  import { Router } from '@angular/router';

  // Definition
  @Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    providers: [ AuthService ]
  })
//

/* 
Export
*/
  export class UserPageComponent implements OnInit {

    public gamerId: any;
    public countClick: number;

    add: ScoreModel = {
      score: 0,
      date: new Date(),
      userId: '',
    };
    
    started = false;
    score = 0;
    time = 10;
    isOdd = true;
    interval = null;

    /* 
    Config.
    */
      // Module injection
      constructor(
        private AuthService: AuthService,
        private scores: ScoreService,
        private router: Router
      ) {
        this.gamerId = null;
      };
    //

    /*
    Methods
    */
    //
    public getIdUser = () => {
      this.AuthService.getUserName().then( result => 
        this.gamerId = result.data._id
      );
    };
  
    /* 
    Hooks
    */
      
      ngOnInit() { 
        this.getIdUser();
      };

      decrease() {
        this.time--;
        if (this.time === 0) {
          this.finish();
        }
      }
    
      tap() {
        // If start to play
        if (!this.started) {
          this.interval = setInterval(this.decrease.bind(this), 1000);
          this.started = true;
        }
        // If time is not finish
        if (this.time > 0) {
          this.score++;
          this.isOdd = !this.isOdd;
          this.countClick = this.score;
        }
      }

      finish() {
        clearInterval(this.interval);
        this.add.score = this.score;
        this.add.userId = this.gamerId;

        // Send score to database
        this.scores.addScore(this.add).subscribe(() => {
          this.router.navigateByUrl('/tap');
        }, (err) => {
          console.log(err);
        });
      }
  }
//