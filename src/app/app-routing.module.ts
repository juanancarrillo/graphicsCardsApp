import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  { path: 'home', 
    loadChildren: () => 
      import('./components/pages/home/home.module')
      .then(m => m.HomeModule) 
  }, 

  { path: 'graphic-card-list', 
    loadChildren: () => 
      import('./components/pages/graphicCard/graphic-card-list/graphic-card-list.module')
      .then(m => m.GraphicCardListModule) 
  },

  { path: 'graphic-card-details/:id', 
    loadChildren: () => 
      import('./components/pages/graphicCard/graphic-card-details/graphic-card-details.module')
      .then(m => m.GraphicCardDetailsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
