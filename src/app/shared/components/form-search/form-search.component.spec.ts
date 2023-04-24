import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormSearchComponent } from './form-search.component';

describe('FormSearchComponent', () => {
  let component: FormSearchComponent;
  let fixture: ComponentFixture<FormSearchComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [FormSearchComponent],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to graphic-card-list when search query has at least 2 characters', () => {
    const inputSearch = fixture.nativeElement.querySelector('input');
    const query = 'test';

    inputSearch.value = query;
    inputSearch.dispatchEvent(new Event('keyup'));

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/graphic-card-list'], {
      queryParams: { q: query },
    });
  });

  it('should not navigate to graphic-card-list when search query has less than 2 characters', () => {
    const inputSearch = fixture.nativeElement.querySelector('input');
    const query = 't';

    inputSearch.value = query;
    inputSearch.dispatchEvent(new Event('keyup'));

    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });
});