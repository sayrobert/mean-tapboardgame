/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { IdentityModel } from '../../models/identity.model';
  import { ApiResponseModel } from "../../models/api.reponse.model";
  import { AuthService } from "../../services/auth/auth-service.service";

  // Definition
  @Component({
    selector: 'app-user-page',
    templateUrl: './logout-page.component.html',
    providers: [ AuthService ]
  })
//

/* 
Export
*/
  export class LogoutPageComponent implements OnInit {

    /* 
    Config.
    */
      // Module injection
      constructor(
        private AuthService: AuthService,
      ) {
      };
    //

    /*
    Methods
    */
    //

    public logout = () => {
      return this.AuthService.logout()
    };
  
    /* 
    Hooks
    */
    ngOnInit() {
      this.logout();
    };
  }
//