import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { RouterModule } from '@angular/router';  // Required for routing
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { MatTableModule } from '@angular/material/table'; // Required for mat-table
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; 
import { ResizableModule } from 'angular-resizable-element'; // Correct version of Resizable module for Angular 14
import { NgChartsModule } from 'ng2-charts'; // Required for Chart.js integration
import { DragDropModule } from '@angular/cdk/drag-drop'; // Required for drag-and-drop

// Import components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetDetailsComponent } from './widget-details/widget-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WidgetDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Enables animations
    FormsModule, // Enables two-way binding with ngModel
    MatTableModule, // For mat-table
    MatButtonModule, // For buttons
    MatInputModule, // For input fields
    MatIconModule, // For icons
    ResizableModule, // Enables resizable functionality
    NgChartsModule, // For charts
    DragDropModule, // Enables drag-and-drop
    RouterModule.forRoot([ // Define routes here
      { path: '', component: DashboardComponent },
      { path: 'widget-details/:id', component: WidgetDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap the AppComponent
})
export class AppModule { }
