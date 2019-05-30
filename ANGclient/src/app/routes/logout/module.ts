/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { Routing } from './router';
    import { LogoutPageComponent } from './logout-page.component';
//


/* 
Definition 
*/
    @NgModule({
        declarations: [ LogoutPageComponent ],
        imports: [ 
            CommonModule, 
            Routing
        ]
    })
//


/* 
Export 
*/
    export class Module {};
//