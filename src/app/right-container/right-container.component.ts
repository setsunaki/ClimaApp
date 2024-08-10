import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-right-container',
  standalone: true,
  imports: 
  [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css'
})
export class RightContainerComponent {

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

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
