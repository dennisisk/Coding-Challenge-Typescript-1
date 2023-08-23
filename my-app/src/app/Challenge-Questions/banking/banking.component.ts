import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent {
  isDisabledStart: boolean = false;
  balance: number = 10000;
  checkingClicked: boolean = false;

  deposit() {

  }

  withdraw() {

  }

  checking() {
    this.checkingClicked = true;
  }

  cancelChecking () {
    this.checkingClicked = false;;
  }

  getAccountInfo() {
    return {
      routingNumber: "1231A4433Y2",
      bankNumber: 555555555
    }
  }
}
