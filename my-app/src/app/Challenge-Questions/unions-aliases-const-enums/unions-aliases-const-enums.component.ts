import { Component } from '@angular/core';

@Component({
  selector: 'app-unions-aliases-const-enums',
  templateUrl: './unions-aliases-const-enums.component.html',
  styleUrls: ['./unions-aliases-const-enums.component.css']
})
export class UnionsAliasesConstEnumsComponent {
  x: number = 5;
  y: number = 5;

  isLoaded: boolean = false;

  firstName: string = 'John';
  lastName: string = 'Doe';

  pets: string[] = ['Fido', 'Lassie', 'Rover'];

  info: any = { address: '1234 Anywhere St.', city: 'Seattle' };

  testFunction() {
    const z = this.x + this.y;
    console.log(' ' + z);
    console.log('i = ' + this.isLoaded);
    console.log('PeList:');
    for (const element of this.pets) {
      console.log(element);
    }
    console.log('In: ' + this.info.address + ' ' + this.info.city);
  }
}
