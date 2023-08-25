import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-types',
  templateUrl: './basic-types.component.html',
  styleUrls: ['./basic-types.component.css']
})
export class BasicTypesComponent {
  x: number = 5;
  y: number = 5;

  isLoaded: boolean = false;

  firstName: string = 'John';
  lastName: string = 'Doe';

  pets: string[] = ['Fido', 'Lassie', 'Rover'];

  info: any = { address: '1234 Anywhere St.', city: 'Seattle' };

  testFunction() {
    const z = this.x + this.y;
    console.log('x + y = ' + z);
    console.log('isLoaded = ' + this.isLoaded);
    console.log('Pets List:');
    for (const element of this.pets) {
      console.log(element);
    }
    console.log('Info: ' + this.info.address + ' ' + this.info.city);
  }
}


