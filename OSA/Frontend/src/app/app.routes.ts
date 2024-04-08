import { Routes } from '@angular/router';
import { BejelentkezesComponent } from './bejelentkezes/bejelentkezes.component';
import { Err404Component } from './err404/err404.component';
import { AdminComponent } from './admin/admin.component';
import { RegistDComponent } from './admin/regist-d/regist-d.component';
import { RegistTComponent } from './admin/regist-t/regist-t.component';
import { TanarComponent } from './tanar/tanar.component';
import { DiakComponent } from './diak/diak.component';
import { AdatokTComponent } from './tanar/adatok-t/adatok-t.component';
import { OrarendTComponent } from './tanar/orarend-t/orarend-t.component';
import { AdatModositasComponent } from './admin/adat-modositas/adat-modositas.component';
import { OrarendDComponent } from './diak/orarend-d/orarend-d.component';
import { AdatokDComponent } from './diak/adatok-d/adatok-d.component';
import { MulasztasokComponent } from './diak/mulasztasok/mulasztasok.component';
import { OraDokumentalasComponent } from './tanar/ora-dokumentalas/ora-dokumentalas.component';
import { AtlagTComponent } from './tanar/atlag-t/atlag-t.component';
import { AtlagDComponent } from './diak/atlag-d/atlag-d.component';

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
        { // Diák regisztrációs felület
            path: "admin/regist-d",
            title: "Diák Regisztrálás",
            component:RegistDComponent
        },
        { // Adatmódosítás
            path: "admin/adat-modositas",
            title: "Adatmódosítás",
            component:AdatModositasComponent
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
        { // órarend
            path: "tanar/orarend",
            title: "Tanár | Órarend",
            component:OrarendTComponent
        },
        { // Óra dokumentáció
            path: "tanar/ora-dokumentacio",
            title: "Tanár | Óra dokumentáció",
            component: OraDokumentalasComponent
        },
        { // Átlag
            path: "tanar/atlag",
            title: "Tanár | Átlag",
            component: AtlagTComponent
        },



    // Diák felhasználói felület
    {
        path: "diak",
        title: "OSA | Diák",
        component:DiakComponent
    },
        { // Profiladatok
            path: "diak/adatok",
            title: "Diák | Profiladatok",
            component:AdatokDComponent
        },
        { // Órarend
            path: "diak/orarend",
            title: "Diák | Órarend",
            component:OrarendDComponent
        },
        { // Mulasztások
            path: "diak/mulasztasok",
            title: "Diák | Mulasztások",
            component: MulasztasokComponent
        },
        { // Átlag
            path: "diak/atlag",
            title: "Diák | Átlag",
            component: AtlagDComponent
        },



    // Error 404 oldal
    {
        path: "**",
        title: "Error - 404",
        component: Err404Component
    }
];
