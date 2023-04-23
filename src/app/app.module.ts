import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { graphicsReducer } from './state/reducers/graphics.reducers';
import { GraphicsEffects } from './state/effects/graphics.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({graphics: graphicsReducer}),
    EffectsModule.forRoot([GraphicsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
