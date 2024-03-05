import { Component } from '@angular/core';
import { OrarendComponent } from '../orarend/orarend.component';
import { HeaderDComponent } from './header-d/header-d.component';


@Component({
  selector: 'app-diak',
  standalone: true,
  imports: [OrarendComponent,HeaderDComponent],
  templateUrl: './diak.component.html',
  styleUrl: './diak.component.css'
})
export class DiakComponent {

}
