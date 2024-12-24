import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'; // Import necessary modules

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  widgets = [
    { id: 1, name: 'Widget 1', width: 350, height: 350 },
    { id: 2, name: 'Widget 2', width: 350, height: 350 },
    { id: 3, name: 'Widget 3', width: 350, height: 350 },
    { id: 4, name: 'Widget 4', width: 350, height: 350 }
  ];

  chartData = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
    datasets: [
      {
        data: [30, 50, 20, 60, 40, 10, 15], // data points for bar chart
        label: 'Bar Dataset',
        backgroundColor: '#007bff',
        borderColor: '#007bff'
      }
    ]
  };

  private resizingIndex: number | null = null;
  private startX: number = 0;
  private startY: number = 0;
  private startWidth: number = 0;
  private startHeight: number = 0;

  constructor(private router: Router) {}

  // Navigate to widget details page
  navigateToWidget(widgetId: number) {
    this.router.navigate(['/widget-details', widgetId]);
  }

  // Handle the drop event
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
  }

  onResizeStart(event: MouseEvent, index: number) {
    this.resizingIndex = index;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.startWidth = this.widgets[index].width;
    this.startHeight = this.widgets[index].height;

    // Add mousemove and mouseup listeners
    document.addEventListener('mousemove', this.onResize.bind(this));
    document.addEventListener('mouseup', this.onResizeEnd.bind(this));
  }

  onResize(event: MouseEvent) {
    if (this.resizingIndex !== null) {
      const dx = event.clientX - this.startX;
      const dy = event.clientY - this.startY;
      this.widgets[this.resizingIndex].width = Math.max(100, this.startWidth + dx); // Minimum width
      this.widgets[this.resizingIndex].height = Math.max(100, this.startHeight + dy); // Minimum height
    }
  }

  onResizeEnd() {
    this.resizingIndex = null;
    // Remove mousemove and mouseup listeners
    document.removeEventListener('mousemove', this.onResize.bind(this));
    document.removeEventListener('mouseup', this.onResizeEnd.bind(this));
  }
}
