import { Component } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-arrow-functions',
  templateUrl: './arrow-functions.component.html',
  styleUrls: ['./arrow-functions.component.css']
})
export class ArrowFunctionsComponent {
  isDisabledStartButton: boolean = false;
  isDisabledStopButton: boolean = false;
  timer: number = 0;

  

  stopButton() {
    this.isDisabledStartButton = false;
    this.isDisabledStopButton = true;
  }

  startButton() { 
    const inter = interval(1000).subscribe(() => {
      this.timer += 1;
    });
    this.isDisabledStartButton = true;
    this.isDisabledStopButton = false;
  }
}




