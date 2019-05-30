/* 
Imports 
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { LogoutPageComponent } from './logout-page.component';
//


/* 
Definition 
*/
    const route: Routes = [
        {
            path: '',
            component: LogoutPageComponent
        }
    ];
//


/* 
Export 
*/
    export const Routing: ModuleWithProviders = RouterModule.forChild(route);
//