/* 
Imports 
*/
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  // import 'rxjs/add/operator/toPromise';
  import { environment } from "../../../environments/environment";
  import { IdentityModel } from '../../models/identity.model';
  import { Observable } from 'rxjs';
//


/* 
Definition 
*/
  @Injectable()
  export class AuthService {

    // Inject module(s) in the service
    constructor( private HttpClient: HttpClient ){};
    
    // Function to register a user
    public register(userData: IdentityModel): Promise<any>{
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      // POST '/auth/register'
      return this.HttpClient.post(`${environment.apiUrl}/auth/register`, userData, { headers: myHeader })
      .toPromise().then(this.getData).catch(this.handleError);
    };

    // Function to register a user
    public identityValidation( _id: String, password: String ): Promise<any>{
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');
      const userData = {
        _id: _id,
        password: password
      }

      // POST '/auth/register'
      return this.HttpClient.post(`${environment.apiUrl}/auth/identity-validation`, userData, { headers: myHeader })
      .toPromise().then(this.getData).catch(this.handleError);
    };

    // Function to connect a user
    public login(userData: IdentityModel): Promise<any>{
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      // POST '/auth/login'
      return this.HttpClient.post(`${environment.apiUrl}/auth/login`, userData, { headers: myHeader })
      .toPromise().then(this.getData).catch(this.handleError);
    };

    // Function to reset password
    public restPassword(password: String, newPassword: String): Promise<any>{
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      // POST '/auth/login'
      return this.HttpClient.post(`${environment.apiUrl}/auth/password`, { password, newPassword }, { headers: myHeader })
      .toPromise().then(this.getData).catch(this.handleError);
    };

    // Function to get user identity from server
    public getUserId(): Promise<any>{
      // POST '/auth/login'
      return this.HttpClient.get(`${environment.apiUrl}/auth`)
      .toPromise().then(this.getData).catch(this.handleError);
    };

    public getUserName(): Promise<any>{
      // POST '/auth/login'
      return this.HttpClient.get(`${environment.apiUrl}/auth/username`)
      .toPromise().then(this.getData).catch(this.handleError);
    };

    public logout(): Observable<any> {
      // GET '/auth/logout'
      console.log('logout service ok');
      return this.HttpClient.get(`${environment.apiUrl}/auth/logout`)
    }

    // Get the API response
    private getData(res: any){
      return res || {};
    };

    // Get the API error
    private handleError(err: any){
      return Promise.reject(err.error);
    };
  };
//