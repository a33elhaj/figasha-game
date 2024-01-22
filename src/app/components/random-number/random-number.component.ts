import { Component } from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.scss']
})
export class RandomNumberComponent {
  generatedNumber: string = "";

  onNumberGenerated(generatedNumber: string): void {
    // this.generatedNumber = "";
    this.generatedNumber = generatedNumber;
  }
}
