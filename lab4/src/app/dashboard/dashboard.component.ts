import { Component } from '@angular/core';
import { QuarterlyGoalsComponent } from './quarterly-goals/quarterly-goals.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { GreetingComponent } from './greeting/greeting.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [QuarterlyGoalsComponent, DatetimeComponent, GreetingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
