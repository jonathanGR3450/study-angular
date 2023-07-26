import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HumanCheckService {

  constructor() { }

  generateNumbers() {
    const number1 = (Math.random() * 10).toFixed(0)
    const number2 = (Math.random() * 5).toFixed(0)
    return [number1, number2];
  }

  checkNumbers(number1: Number, number2: Number, result: Number): boolean {
    return (Number(number1) + Number(number2)) == Number(result);
  }
}
