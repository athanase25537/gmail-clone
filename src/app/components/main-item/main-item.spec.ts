import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItem } from './main-item';

describe('MainItem', () => {
  let component: MainItem;
  let fixture: ComponentFixture<MainItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
