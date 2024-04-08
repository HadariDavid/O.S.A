import { Component, OnInit } from '@angular/core';
import { HeaderAComponent } from '../header-a/header-a.component';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';
import { registTObj } from '../../felhasznaloAdatokObj';

@Component({
  selector: 'app-regist-t',
  standalone: true,
  imports: [HeaderAComponent, FormsModule],
  templateUrl: './regist-t.component.html',
  styleUrls: ['./regist-t.component.css']
})
export class RegistTComponent {

  constructor(protected authService: AuthService) {}

  ujtanar: registTObj = {
    csaladNev: '',
    keresztNev: '',

    telefon: '',
    email: '',

    anyaLeanyVezetekneve: '',
    anyaLeanyKeresztneve: '',

    neme: '',

    szuletesiDatum: '',
    szuletesiOrszag: '',
    szuletesiHely: '',

    orszag: '',
    iranyitoSzam: '',
    kozseg: '',
    ut: '',
    hazSzam: '',

    allampolgarsag: '',
    anyanyelv: '',

    szemelyi: '',
    oktatasiAzonosito:'',
    adoszam: '',
    taj: '',

    bankszamlaSzam: '',

    jogviszony: '',
    jogviszonyKezdete: '',
    jogviszonyVartVege: '',

    szakok:'',

    egyeb: '',

    admin: false,
  }

  isDisabled: boolean = true;
  Value: string = '';
  Placeholder: string = 'OM Azonosító';




// OM azonosító switch
  isChecked(event: any) {
    this.isDisabled = !event.target.checked;
    if (this.isDisabled) {
      this.Value = this.Placeholder;
    }
    else{
      this.Value = '';
    }
  }

// Regisztrálás gomb
  regisztralasGomb() {
    this.authService.tanarReg(this.ujtanar);
  }

}