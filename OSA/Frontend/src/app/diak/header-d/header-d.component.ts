import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header-d',
  standalone: true,
  imports: [],
  templateUrl: './header-d.component.html',
  styleUrl: './header-d.component.css'
})
export class HeaderDComponent {

  constructor(protected authservice: AuthService) {}

  kijelentkezes(){
    console.log("sikeres kijelentkezés");
  }

}
