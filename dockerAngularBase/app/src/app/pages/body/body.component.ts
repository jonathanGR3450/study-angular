import { Component } from '@angular/core';
import { Plan } from 'src/app/interfaces/plan.interface';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  query: string = '';
  plans: Plan[];
  showTable: boolean = false;

  constructor(private planService: PlanService) {
    this.plans = planService.getPlan();
  }

  changeShowTable() {
    this.showTable = !this.showTable;
  }

}
