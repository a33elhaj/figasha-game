import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  generatedNumber: string = "";
  rNumber = {
    fDigit: 0,
    sDigit: 0,
    tDigit: 0,
  }

  result = {
    fResult: "X",
    sResult: "X",
    tResult: "X",
  }

  guessed = false;
  guessedNumber: string = "";
  gNumber = {
    fDigit: 0,
    sDigit: 0,
    tDigit: 0,
  }

  resetResultVariable() {
    this.result.fResult = "";
    this.result.sResult = "";
    this.result.tResult = "";
  }

  onNumberGenerated(generatedNumber: string): void {

    // this.generatedNumber = "";
    this.generatedNumber = generatedNumber;

  }//enf of method

  onSubmit(): void {
    let arr: Array<string> = this.guessedNumber.split("");
    // console.log(arr);
    this.gNumber.fDigit = parseInt(arr[0]);
    this.gNumber.sDigit = parseInt(arr[1]);
    this.gNumber.tDigit = parseInt(arr[2]);

    let arr2: Array<string> = this.generatedNumber.split("");
    this.rNumber.fDigit = parseInt(arr2[0]);
    this.rNumber.sDigit = parseInt(arr2[1]);
    this.rNumber.tDigit = parseInt(arr2[2]);

    //reset result values
    this.resetResultVariable();

    // chek first digit
    if (this.gNumber.fDigit == this.rNumber.fDigit) {
      this.result.fResult = "=";
    } else if (this.gNumber.fDigit == this.rNumber.sDigit) {
      this.result.fResult = "O";
    } else if (this.gNumber.fDigit == this.rNumber.tDigit) {
      this.result.fResult = "O";
    } else {
      this.result.fResult = "X";
    }
    console.log("r num: " + this.rNumber.fDigit);
    console.log("g num: " + this.gNumber.fDigit);
    console.log("result 1: " + this.result.fResult);

    // chek second digit
    if (this.gNumber.sDigit == this.rNumber.sDigit) {
      this.result.sResult = "=";
    } else if (this.gNumber.sDigit == this.rNumber.fDigit) {
      this.result.sResult = "O";
    } else if (this.gNumber.sDigit == this.rNumber.tDigit) {
      this.result.sResult = "O";
    } else {
      this.result.sResult = "X";
    }
    console.log("r num: " + this.rNumber.sDigit);
    console.log("g num: " + this.gNumber.sDigit);
    console.log("result 1: " + this.result.sResult);

    // chek third digit
    if (this.gNumber.tDigit == this.rNumber.tDigit) {
      this.result.tResult = "=";
    } else if (this.gNumber.tDigit == this.rNumber.fDigit) {
      this.result.tResult = "O";
    } else if (this.gNumber.tDigit == this.rNumber.sDigit) {
      this.result.tResult = "O";
    } else {
      this.result.tResult = "X";
    }
    console.log("r num: " + this.rNumber.tDigit);
    console.log("g num: " + this.gNumber.tDigit);
    console.log("result 1: " + this.result.tResult);


  }

}
