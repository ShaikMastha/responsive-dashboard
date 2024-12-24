import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetDetailsComponent } from './widget-details/widget-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'widget-details/:id', component: WidgetDetailsComponent },  // Route for widget details with ID
  { path: '**', redirectTo: '' }  // Wildcard route for undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
