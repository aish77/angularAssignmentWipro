import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupCardComponent } from './topup-card.component';

describe('TopupCardComponent', () => {
  let component: TopupCardComponent;
  let fixture: ComponentFixture<TopupCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
