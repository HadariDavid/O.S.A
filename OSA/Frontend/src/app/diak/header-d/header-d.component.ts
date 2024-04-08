import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-d',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-d.component.html',
  styleUrl: './header-d.component.css'
})
export class HeaderDComponent {

  constructor(protected authservice: AuthService) {}

  kijelentkezes(){
    console.log("sikeres kijelentkezés");
  }

}
