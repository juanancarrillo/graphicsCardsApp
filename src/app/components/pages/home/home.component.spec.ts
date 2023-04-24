import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';
import { GraphicCardModule } from '../graphicCard/graphic-card.module';
import { StoreModule } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => { 
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HomeModule,
        GraphicCardModule,
        StoreModule.forRoot({})
      ],
      providers: [
        { provide: ActivatedRoute, useValue: {}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
