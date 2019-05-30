/* 
Imports
*/
    // Angular
    import { Routes } from '@angular/router';

    // Import AuthGuuard to define route accessibility
    import { AuthGuard } from "./auth.guard";
//

/* 
Export
*/
    export const MainRouter: Routes = [
        {
            path: '',
            loadChildren: './routes/home-page/module#Module'
        },
        {
            path: 'identity-validation',
            loadChildren: './routes/identity-validation/module#Module'
        },
        {
            path: 'reset-password',
            loadChildren: './routes/reset-password-page/module#Module',
            canActivate: [ AuthGuard ] // Accessible for connected user
        },
        {
            path: 'me',
            loadChildren: './routes/user-page/module#Module',
            canActivate: [ AuthGuard ] // Accessible for connected user
        },
        {
            path: 'tap',
            loadChildren: './routes/scores/module#Module',
            canActivate: [ AuthGuard ] // Accessible for connected user
        },
        {
            path: 'logout',
            loadChildren: './routes/logout/module#Module',
            canActivate: [ AuthGuard ] // Accessible for connected user
        }
    ];
//