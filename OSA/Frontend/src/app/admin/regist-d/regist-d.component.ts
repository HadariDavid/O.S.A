import { Component } from '@angular/core';
import { HeaderAComponent } from '../header-a/header-a.component';
import { FormsModule } from '@angular/forms';
import { registDObj } from '../../felhasznaloAdatokObj';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-regist-d',
  standalone: true,
  imports: [HeaderAComponent, FormsModule],
  templateUrl: './regist-d.component.html',
  styleUrl: './regist-d.component.css'
})
export class RegistDComponent {

  constructor(protected authservice: AuthService) {}

  OmIsDisabled: boolean = true;
  OmValue: string = '';
  OmPlaceholder: string = 'OM Azonosító';

  BankIsDisabled: boolean = true;
  BankValue: string = '';
  BankPlaceholder: string = 'XXXXXXXX-XXXXXXXX-XXXXXXXX'

  ujdiak: registDObj = {
    csaladNev: '',
    keresztNev: '',
    telefon: '',
    email: '',

    anyaLeanyVezetekneve: '',
    anyaLeanyKeresztneve: '',
    anyaTelefonszam: '',
    anyaEmail: '',

    gondviseloVezetekneve: '',
    gondviseloKeresztneve: '',
    gondviseloTelefon: '',
    gondviseloEmail: '',

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
    oktatasiAzonosito: '',
    taj: '',
    adoszam: '',

    bankszamlaSzam: '',

    jogviszony: '',
    jogviszonyKezdete: '',
    jogviszonyVartVege: '',

    kepzes: '',
    osztalyId: '',

    egyeb: '',
  }

  OmIsChecked(event: any) {
    this.OmIsDisabled = !event.target.checked;
    if (this.OmIsDisabled) {
      this.OmValue = this.OmPlaceholder;
    }
    else{
      this.OmValue = '';
    }
  }

  BankIsChecked(event: any) {
    this.BankIsDisabled = !event.target.checked;
    if (this.BankIsDisabled) {
      this.BankValue = this.BankPlaceholder;
    }
    else{
      this.BankValue = '';
    }
  }

  regisztralasGomb() {
    this.authservice.diakReg(this.ujdiak);
  }

}
