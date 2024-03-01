import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-t',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-t.component.html',
  styleUrl: './header-t.component.css'
})
export class HeaderTComponent {

}
