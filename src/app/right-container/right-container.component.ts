import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css'
})
export class RightContainerComponent {

  today:boolean = false;
  week:boolean =  true;

  celsius:boolean = true;
  fahrenheit:boolean = false;

  onTodayClick(){
    this.today = true;
    this.week = false;
  }

  onWeekClick(){
    this.week = true;
    this.today = false;
  }

  onCelsiusClick(){
    this.celsius = true;
    this.fahrenheit = false;
  }

  onFahrenheitClick(){
    this.fahrenheit = true;
    this.celsius = false;
  }

}
