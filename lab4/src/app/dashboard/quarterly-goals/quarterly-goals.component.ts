import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-quarterly-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quarterly-goals.component.html',
  styleUrl: './quarterly-goals.component.scss'
})
export class QuarterlyGoalsComponent {
  checkbox = 'assets/checkbox.svg';
  pencil = 'assets/pencil.svg';

}
