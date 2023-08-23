import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow-functions',
  templateUrl: './arrow-functions.component.html',
  styleUrls: ['./arrow-functions.component.css']
})
export class ArrowFunctionsComponent {
  isDisabledStartButton: boolean = false;
  isDisabledStopButton: boolean = false;
  timer: number = 1;
  stopButton() {
    this.timer = 0;
    this.isDisabledStartButton = false;
    this.isDisabledStopButton = true;
  }

  startButton() {
    this.timer += 1;
    this.isDisabledStartButton = true;
    this.isDisabledStopButton = false;
  }
}




