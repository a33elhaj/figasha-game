import { Directive, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  exportAs: 'appRandomNumber',
  selector: '[appRandomNumber]'
})
export class RandomNumberDirective implements OnInit {
  #generatedNumber:string = "";

  @Output()
  numberGenerated = new EventEmitter<string>();

  ngOnInit(): void {
    this.generateNumber();
  }

  generateNumber(): void {
    this.#generatedNumber = "";
    this.#generatedNumber = this.#generatedNumber+""+this.generateSingleDigit();
    this.#generatedNumber = this.#generatedNumber+""+this.generateSingleDigit();
    this.#generatedNumber = this.#generatedNumber+""+this.generateSingleDigit();
    this.numberGenerated.emit(this.#generatedNumber);
  }

  generateSingleDigit(): number {
    return Math.floor(10 * Math.random());
  }
}
