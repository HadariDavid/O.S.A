import { Routes } from '@angular/router';
import { BejelentkezesComponent } from './bejelentkezes/bejelentkezes.component';
import { Err404Component } from './err404/err404.component';
import { AdminComponent } from './admin/admin.component';
import { RegistTComponent } from './regist-t/regist-t.component';

export const routes: Routes = [
    {
        path: "",
        title: "OSA | Bejelentkezes",
        component:BejelentkezesComponent
    },


    
    {
        path: "bejelentkezes",
        title: "OSA | Bejelentkezes",
        component:BejelentkezesComponent
    },
        {
            path: "bejelentkezes/admin",
            title: "OSA | ADMIN",
            component:AdminComponent
        },
            {
                path: "bejelentkezes/admin/regist-t",
                title: "Tanár Regisztrálás",
                component:RegistTComponent
            },



    {
        path: "**",
        title: "Error - 404",
        component: Err404Component
    }
];
