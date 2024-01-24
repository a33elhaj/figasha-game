export class Result {
  fDigitResult?: string;
  sDigitResult?: string;
  tDigitResult?: string;

  constructor(f: string, s: string, t: string) {
    this.fDigitResult = f;
    this.sDigitResult = s;
    this.tDigitResult = t;
  }
}
