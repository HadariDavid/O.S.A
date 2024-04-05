import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bejelentkezesObj, registDObj, registTObj } from './felhasznaloAdatokObj';
import { Subscription } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, protected router:Router) { }

  private tanarRegisztracioRout = "http://localhost:3000/registration/teacher"
  private diakRegisztracioRout = "http://localhost:3000/registration/student"
  private bejelentkezesRoute = "http://localhost:3000/bejelentkezes"
  private kijelentkezesRoute = "http://localhost:3000/kijelentkezes"

  tokenId:any
 

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

  bejelentkezes(userbej: bejelentkezesObj) :Subscription{
      return this.http.post<bejelentkezesObj>(this.bejelentkezesRoute, userbej).subscribe((valasz: any) => {

        this.tokenId = {"token":valasz.data.token}
       

          console.log(this.tokenId.token)

        if(valasz.success){
          localStorage.setItem('token',valasz.data.token)
          this.router.navigate(['/tanar']);
        }

        console.log("sikeres bejelentkezes")
        console.log(this.tokenId)
      })
  }

  kijelentkezes(){
    const headers = new HttpHeaders ({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer ' + this.tokenId.token
    })

    return this.http.post(this.kijelentkezesRoute, {}, {headers}).subscribe((valasz:any) => {
      localStorage.removeItem('token')
      this.router.navigate(['/bejelentkezes']);
    },error => {
      console.log(error)
    })

  }



}
