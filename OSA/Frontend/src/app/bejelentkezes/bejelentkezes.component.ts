import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { bejelentkezesObj } from '../felhasznaloAdatokObj';

@Component({
  selector: 'app-bejelentkezes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bejelentkezes.component.html',
  styleUrl: './bejelentkezes.component.css'
})
export class BejelentkezesComponent {

  constructor(protected authservice: AuthService) {}

  diakbej: bejelentkezesObj = {
    id: '',
    jelszo: ''
  }

  bejelentkezesGomb() {
    this.authservice.bejelentkezes(this.diakbej);
  }

}
