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

  resetResultVariable(){
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
    if(this.rNumber.fDigit == this.gNumber.fDigit){
      this.result.fResult = "=";
    }else if(this.rNumber.fDigit == this.gNumber.sDigit){
      this.result.fResult = "O";
    }else if(this.rNumber.fDigit == this.gNumber.tDigit){
      this.result.fResult = "O";
    }else{
      this.result.fResult = "X";
    }
    console.log(this.result.fResult);
    
    // chek second digit
    if(this.rNumber.sDigit == this.gNumber.sDigit){
      this.result.fResult = "=";
    }else if(this.rNumber.sDigit == this.gNumber.fDigit){
      this.result.fResult = "O";
    }else if(this.rNumber.sDigit == this.gNumber.tDigit){
      this.result.fResult = "O";
    }else{
      this.result.fResult = "X";
    }

    // chek third digit
    if(this.rNumber.tDigit == this.gNumber.tDigit){
      this.result.fResult = "=";
    }else if(this.rNumber.tDigit == this.gNumber.fDigit){
      this.result.fResult = "O";
    }else if(this.rNumber.tDigit == this.gNumber.sDigit){
      this.result.fResult = "O";
    }else{
      this.result.fResult = "X";
    }

  }

}
