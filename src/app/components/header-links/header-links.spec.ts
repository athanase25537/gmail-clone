import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLinks } from './header-links';

describe('HeaderLinks', () => {
  let component: HeaderLinks;
  let fixture: ComponentFixture<HeaderLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
