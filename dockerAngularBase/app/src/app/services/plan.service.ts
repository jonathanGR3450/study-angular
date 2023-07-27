import { Injectable } from '@angular/core';
import { Plan } from '../interfaces/plan.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor() { }

  getPlan(): Plan[] {
    let cStarted: Plan = {
      name: 'STARTED',
      price: 14.234423342,
      detail: `10 users included
      2 GB of storage
      Email support
      Help center access`,
      btn: 'Sign up for free',
      date: new Date()
    };

    let cSuperPrEmium: Plan = {
      name: 'SUPER PREMIUM',
      price: 25,
      detail: `20 users included
      10 GB of storage
      Priority email support
      Help center access`,
      btn: 'Get started',
      date: new Date()
    };

    let cUltimatePremium: Plan = {
      name: 'ULTIMATE PREMIUM',
      price: 30,
      detail: `30 users included
      15 GB of storage
      Phone and email support
      Help center access`,
      btn: 'Contact us',
      date: new Date()
    };
    return [cStarted, cSuperPrEmium, cUltimatePremium];
  }
}
