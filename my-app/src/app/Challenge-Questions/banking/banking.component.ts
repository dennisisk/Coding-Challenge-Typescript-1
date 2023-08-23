import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent {
  isDisabledStart: boolean = false;

  deposit() {

  }

  withdraw() {

  }

  getAccountInfo() {
    return {
      routingNumber: "1231A4433Y2",
      bankNumber: 555555555
    }
  }
}
