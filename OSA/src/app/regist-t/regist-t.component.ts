import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { registTObj } from '../felhasznaloAdatokObj';

@Component({
  selector: 'app-regist-t',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './regist-t.component.html',
  styleUrls: ['./regist-t.component.css']
})
export class RegistTComponent {

  constructor(protected authService: AuthService) {}


  isDisabled: boolean = true;
  Value: string = '';
  Placeholder: string = 'OM Azonosító';

  isChecked(event: any) {
    this.isDisabled = !event.target.checked;
    if (this.isDisabled) {
      this.Value = this.Placeholder;
    }
    else{
      this.Value = '';
    }
  }

  tanarRegisztracioGomb(ujtanar : registTObj) {
    this.authService.tanarReg
  }

}