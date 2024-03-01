import { Routes } from '@angular/router';
import { BejelentkezesComponent } from './bejelentkezes/bejelentkezes.component';
import { Err404Component } from './err404/err404.component';
import { AdminComponent } from './admin/admin.component';
import { RegistTComponent } from './regist-t/regist-t.component';
import { RegistDComponent } from './regist-d/regist-d.component';
import { TanarComponent } from './tanar/tanar.component';

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
        path: "admin",
        title: "OSA | ADMIN",
        component:AdminComponent
    },
        {
            path: "admin/regist-t",
            title: "Tanár Regisztrálás",
            component:RegistTComponent
        },
        {
            path: "admin/regist-d",
            title: "Diák Regisztrálás",
            component:RegistDComponent
        },

    

    {
        path: "tanar",
        title: "OSA | Tanár",
        component:TanarComponent
    },


    {
        path: "**",
        title: "Error - 404",
        component: Err404Component
    }
];
