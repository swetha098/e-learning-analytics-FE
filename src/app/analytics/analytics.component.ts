import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChartComponent } from 'chart.js';
// import { ILoadedEventArgs, ChartTheme, IPointRenderEventArgs, ITooltipRenderEventArgs } from '@syncfusion/ej2-angular-charts';
// import { Browser } from '@syncfusion/ej2-base';



@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AnalyticsComponent implements AfterViewInit {
   
@ViewChild('graphCanvas', { static: false }) graphCanvas!: ElementRef;

ngAfterViewInit() {
  const canvas: HTMLCanvasElement = this.graphCanvas.nativeElement;
  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
 
  if (ctx) {
    const dataPoints = [ // Sample data points
      { label: 'A', value: 100 },
      { label: 'B', value: 200 },
      { label: 'C', value: 150 },
      { label: 'D', value: 300 },
      { label: 'E', value: 250 }
    ];

    const maxBarHeight = canvas.height - 40; // Adjust the maximum height of bars as needed
    const barWidth = 40; // Adjust the width of bars as needed
    const barSpacing = 30; // Adjust the spacing between bars as needed

    // Draw X-axis
    ctx.moveTo(30, canvas.height - 30);
    ctx.lineTo(canvas.width - 10, canvas.height - 30);

    // Draw Y-axis
    ctx.moveTo(30, canvas.height - 30);
    ctx.lineTo(30, 10);

    ctx.strokeStyle = 'black';
    ctx.stroke();

    ctx.fillStyle = 'black';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'end'; // Adjusted alignment to end (right)
    ctx.fillText('Enrollment', 20, canvas.height / 2);

    let x = 50; // Starting position for the first bar

    for (const dataPoint of dataPoints) {
      const barHeight = (dataPoint.value / Math.max(...dataPoints.map(dp => dp.value))) * maxBarHeight;

      ctx.fillStyle = 'blue';
      ctx.fillRect(x, canvas.height - barHeight - 30, barWidth, barHeight);

      ctx.fillStyle = 'black';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(dataPoint.label, x + barWidth / 2, canvas.height - 10);

      x += barWidth + barSpacing;
    }
  }
}
}