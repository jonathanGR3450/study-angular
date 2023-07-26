import { TestBed } from '@angular/core/testing';

import { HumanCheckService } from './human-check.service';

describe('HumanCheckService', () => {
  let service: HumanCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumanCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('generate random numbers', () => {
    const [number1, number2] = service.generateNumbers();
    const sum = number1 + number2;
    expect(sum).toMatch(/\d{1,}/)
  })

  it('check numbers', () => {
    const number1 = 2
    const number2 = 3
    const sum = number1 + number2
    const check = service.checkNumbers(number1, number2, sum)
    expect(check).toBeTrue()
  })
});
