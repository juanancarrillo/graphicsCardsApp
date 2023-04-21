import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicCardDetailsComponent } from './graphic-card-details.component';

const routes: Routes = [{ path: '', component: GraphicCardDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicCardDetailsRoutingModule { }
