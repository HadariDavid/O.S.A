import { Component } from '@angular/core';
import { HeaderTComponent } from './header-t/header-t.component';
import { OrarendComponent } from '../orarend/orarend.component';


@Component({
  selector: 'app-tanar',
  standalone: true,
  imports: [HeaderTComponent, OrarendComponent],
  templateUrl: './tanar.component.html',
  styleUrl: './tanar.component.css'
})
export class TanarComponent {

}
