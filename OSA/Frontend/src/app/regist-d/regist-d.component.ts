import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-regist-d',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './regist-d.component.html',
  styleUrl: './regist-d.component.css'
})
export class RegistDComponent {
  OmIsDisabled: boolean = true;
  OmValue: string = '';
  OmPlaceholder: string = 'OM Azonosító';

  BankIsDisabled: boolean = true;
  BankValue: string = '';
  BankPlaceholder: string = 'XXXXXXXX'

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
}
