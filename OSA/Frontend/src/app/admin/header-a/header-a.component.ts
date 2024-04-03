import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-a',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-a.component.html',
  styleUrl: './header-a.component.css'
})
export class HeaderAComponent {

}
