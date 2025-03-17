import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAngularComponentComponent } from './first-angular-component.component';

describe('FirstAngularComponentComponent', () => {
  let component: FirstAngularComponentComponent;
  let fixture: ComponentFixture<FirstAngularComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstAngularComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstAngularComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
