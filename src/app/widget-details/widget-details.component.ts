import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.css']
})
export class WidgetDetailsComponent implements OnInit {
  widgetId!: number; 
  nestedTableData: any[] = []; // Initialize with an empty array

  constructor(private route: ActivatedRoute) {}
ngOnInit() {
    // Get the widgetId from the route parameters
    this.widgetId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Widget ID:', this.widgetId); // Log the widget ID
    this.loadNestedTableData();
  }


  // Load data for the nested table based on the widgetId
  loadNestedTableData() {
    // Example nested table data
    this.nestedTableData = [
      { id: 1, name: 'Item 1', details: 'Details for Item 1', editable: false },
      { id: 2, name: 'Item 2', details: 'Details for Item 2', editable: false },
      { id: 3, name: 'Item 3', details: 'Details for Item 3', editable: false }
    ];
  }

  // Edit the row and toggle editable state
  editRow(element: any) {
    element.editable = !element.editable;
    console.log('Editing:', element); // Log the row being edited
  }

  // Save the edited row
  saveRow(element: any) {
    element.editable = false;
    console.log('Saved:', element); // Log the saved row
  }

  // Delete the row by its id
  deleteRow(id: number) {
    this.nestedTableData = this.nestedTableData.filter(item => item.id !== id);
    console.log('Deleted item with ID:', id); // Log the deleted item
  }
}
