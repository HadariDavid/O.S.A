import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registTObj } from './felhasznaloAdatokObj';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private tanarRegisztracioRout = "http://localhost:3000/registration/teacher"

  ujtanar: registTObj = {
    tNevVezetek: '',
    tNevKozep: '',
    tNevKereszt: '',

    tTel: '',
    tEMail: '',

    tANevVezetek: '',
    tAANevKozep: '',
    tANevKereszt: '',

    tNem: '',

    tSzulIdo: '',
    tSzulHely: '',

    tCimOrszag: '',
    tCimIranyitoSzam: '',
    tCimKozseg: '',
    tCímUt: '',
    tCimHazSzam: '',

    tAllampolgarsag: '',
    tAnyanyelv: '',

    tSzemelyIgazolvany: '',
    tAzonosito: '',
    tTAJ: '',
    tAdozonosito: '',

    tBank1: '',
    tBank2: '',
    tBank3: '',

    tjogviszony: '',
    tjogviszonydatum: '',
  }

  tanarReg(ujtanar: registTObj) :Subscription {
    return this.http.put<registTObj>(this.tanarRegisztracioRout, ujtanar).subscribe((valasz : any) => {
      console.log("Sikeres küldés")
    })
    
  }

}
