import { Component } from '@angular/core';

@Component({
  selector: 'app-anew',
  templateUrl: './anew.component.html',
  styleUrls: ['./anew.component.css']
})
export class AnewComponent {
  yAxis: string[] = [];
  courseNames: string[] = [];
  // You can update the yAxis array with dynamic values as needed

  constructor() {
    // Example: Update the yAxis array with dynamic values
    this.yAxis = ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5'];
    this.courseNames = ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5', 'Course 6', 'Course 7', 'Course 8'];
  }

}
