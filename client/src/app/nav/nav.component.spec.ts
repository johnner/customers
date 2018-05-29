
import { fakeAsync, ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title`, async(() => {
    const fixture = TestBed.createComponent(NavComponent);
    const nav = fixture.debugElement.componentInstance;
    expect(nav.title).toEqual('Customers Management');
  }));
});
