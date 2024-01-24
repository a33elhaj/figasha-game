import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Result } from 'src/app/utiltes/result-code';
import { ThreeDigits } from 'src/app/utiltes/three-digits';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  generatedNumber: string = "";

  allResults?: Result[];

  guessedNumber: string = "";

  allguessedNumbers?: ThreeDigits[] ;

  hdrObject =[{
    guesseArr: new ThreeDigits(0, 0, 0),
    resultArr: new Result("X", "X", "X")
  }];

  resetAllResultVariable() {
    this.hdrObject = [];
    this.allResults = [];
    this.allguessedNumbers = [];
  }

  onNumberGenerated(generatedNumber: string): void {

    // this.generatedNumber = "";
    this.generatedNumber = generatedNumber;
    this.resetAllResultVariable();

  }//enf of method

  onSubmit(): void {
    let arr: Array<string> = this.guessedNumber.split("");
    let gn1 = parseInt(arr[0]);
    let gn2 = parseInt(arr[1]);
    let gn3 = parseInt(arr[2]);

    this.allguessedNumbers?.push(new ThreeDigits(gn1, gn2, gn3));

    let arr2: Array<string> = this.generatedNumber.split("");
    let rn1 = parseInt(arr2[0]);
    let rn2 = parseInt(arr2[1]);
    let rn3 = parseInt(arr2[2]);

    let rCode1;
    let rCode2;
    let rCode3;

    // chek first digit
    if (gn1 == rn1) {
      rCode1 = "=";
    } else if (gn1 == rn2) {
      rCode1 = "O";
    } else if (gn1 == rn3) {
      rCode1 = "O";
    } else {
      rCode1 = "X";
    }

    // chek second digit
    if (gn2 == rn2) {
      rCode2 = "=";
    } else if (gn2 == rn1) {
      rCode2 = "O";
    } else if (gn2 == rn3) {
      rCode2 = "O";
    } else {
      rCode2 = "X";
    }

    // chek third digit
    if (gn3 == rn3) {
      rCode3 = "=";
    } else if (gn3 == rn1) {
      rCode3 = "O";
    } else if (gn3 == rn2) {
      rCode3 = "O";
    } else {
      rCode3 = "X";
    }

    this.allResults?.push(new Result(rCode1, rCode2, rCode3));

    this.hdrObject.push({
      guesseArr: new ThreeDigits(gn1, gn2, gn3),
      resultArr: new Result(rCode1, rCode2, rCode3),
    });

  }

}
