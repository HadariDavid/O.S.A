import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bejelentkezesObj, registDObj, registTObj } from './felhasznaloAdatokObj';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private tanarRegisztracioRout = "http://localhost:3000/registration/teacher"
  private diakRegisztracioRout = "http://localhost:3000/registration/student"
  private bejelentkezesRoute = "http://localhost:3000/login"

  tanarReg(ujtanar: registTObj) :Subscription{
    return this.http.put<registTObj>(this.tanarRegisztracioRout, ujtanar).subscribe((valasz : any) => {
      console.log("Sikeres küldés");
    })
  }

  diakReg(ujdiak: registDObj) :Subscription{
    return this.http.put<registDObj>(this.diakRegisztracioRout, ujdiak).subscribe((valasz : any) => {
      console.log("Sikeres küldés");
    })
  }

  bejelentkezes(diakbej: bejelentkezesObj) :Subscription{
      return this.http.post<bejelentkezesObj>(this.bejelentkezesRoute, diakbej).subscribe((valasz: any) => {
        console.log
      })
  }

}
