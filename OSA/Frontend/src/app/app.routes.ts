import { Routes } from '@angular/router';
import { BejelentkezesComponent } from './bejelentkezes/bejelentkezes.component';
import { Err404Component } from './err404/err404.component';
import { AdminComponent } from './admin/admin.component';
import { RegistTComponent } from './regist-t/regist-t.component';
import { RegistDComponent } from './regist-d/regist-d.component';
import { TanarComponent } from './tanar/tanar.component';
import { DiakComponent } from './diak/diak.component';
import { AdatokTComponent } from './tanar/adatok-t/adatok-t.component';
import { OrarendTComponent } from './tanar/orarend-t/orarend-t.component';

export const routes: Routes = [
    // Főoldal - alap
    {
        path: "",
        title: "OSA | Bejelentkezes",
        component:BejelentkezesComponent
    },



    // Főoldal
    {
        path: "bejelentkezes",
        title: "OSA | Bejelentkezes",
        component:BejelentkezesComponent
    },



    //Admin oldal
    {
        path: "admin",
        title: "OSA | ADMIN",
        component:AdminComponent
    },
        { // Tanár regisztrációs felület
            path: "admin/regist-t",
            title: "Tanár Regisztrálás",
            component:RegistTComponent
        },
        {// Diák regisztrációs felület
            path: "admin/regist-d",
            title: "Diák Regisztrálás",
            component:RegistDComponent
        },


    
    // Tanár felhasználói felület
    {
        path: "tanar",
        title: "OSA | Tanár",
        component:TanarComponent
    },
        { // Profiladatok
            path: "tanar/adatok",
            title: "Tanár | Profiladatok",
            component:AdatokTComponent
        },
        { // Orarend
            path: "tanar/orarend",
            title: "Tanár | Órarend",
            component:OrarendTComponent
        },



    // Diák felhasználói felület
    {
        path: "diak",
        title: "OSA | Diák",
        component:DiakComponent
    },



    // Error 404 oldal
    {
        path: "**",
        title: "Error - 404",
        component: Err404Component
    }
];
