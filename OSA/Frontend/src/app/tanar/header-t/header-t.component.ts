import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header-t',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-t.component.html',
  styleUrl: './header-t.component.css'
})
export class HeaderTComponent {
  
  constructor(protected authservice: AuthService) {}

  kijelentkezes(){

    

  }

}
