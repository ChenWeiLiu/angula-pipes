import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;

  onHeightChange(vaule: string) {
    this.height = parseFloat(vaule);
  }

  onNameChange(vaule: string) {
    this.name = vaule;
  }

  onDateChange(vaule: string) {
    this.date = vaule;
  }

  onAmountChange(vaule:string) {
    this.amount = parseFloat(vaule);
  }
}
