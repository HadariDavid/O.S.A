import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-regist-t',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './regist-t.component.html',
  styleUrls: ['./regist-t.component.css']
})
export class RegistTComponent {
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

}