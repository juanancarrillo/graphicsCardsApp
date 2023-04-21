import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicCardListComponent } from './graphic-card-list.component';

const routes: Routes = [{ path: '', component: GraphicCardListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicCardListRoutingModule { }
