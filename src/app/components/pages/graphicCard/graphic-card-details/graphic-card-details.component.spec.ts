import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCardDetailsComponent } from './graphic-card-details.component';

describe('GraphicCardDetailsComponent', () => {
  let component: GraphicCardDetailsComponent;
  let fixture: ComponentFixture<GraphicCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicCardDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
