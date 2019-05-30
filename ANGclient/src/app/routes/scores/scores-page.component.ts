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


  // Definition
  @Component({
    selector: 'app-user-page',
    templateUrl: './scores-page.component.html',
    providers: [ AuthService ]
  })
//

/* 
Export
*/
  export class ScoresPageComponent implements OnInit {
    scores = null;

    /* 
    Config.
    */
      // Module injection
      constructor(
        private score: ScoreService
      ) {
      };
    //


    /*
    Methods
    */
    //

  
    /* 
    Hooks
    */

    // Get scores
    ngOnInit() { 
      this.score.getScores().subscribe(scores => {
        this.scores = scores.data;
        console.log(this.scores);
      }, (err) => {
        console.error(err);
      });
    };
  }
//