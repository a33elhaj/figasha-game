import { Directive, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  exportAs: 'appRandomNumber',
  selector: '[appRandomNumber]'
})
export class RandomNumberDirective implements OnInit {
  #generatedNumber: string = "";

  @Output()
  numberGenerated = new EventEmitter<string>();

  ngOnInit(): void {
    this.generateNumber();
  }

  generateNumber(): void {
    this.#generatedNumber = "";

    let rn1: number = this.generateSingleDigit();
    let rn2: number = this.generateSingleDigit();
    let rn3: number = this.generateSingleDigit();

    while (rn2 == rn1) {
      rn2 = this.generateSingleDigit();
      if (rn2 != rn1)
        break;

    }

    while (rn3 == rn1 || rn3 == rn2) {
      rn3 = this.generateSingleDigit();
      if (rn3 != rn1 && rn3 != rn2)
        break;
    }

    this.#generatedNumber = this.#generatedNumber + "" + rn1;
    this.#generatedNumber = this.#generatedNumber + "" + rn2;
    this.#generatedNumber = this.#generatedNumber + "" + rn3;
    this.numberGenerated.emit(this.#generatedNumber);
  }

  generateSingleDigit(): number {
    return Math.floor(10 * Math.random());
  }
}
