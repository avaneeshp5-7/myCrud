import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreImageComponent } from './more-image.component';

describe('MoreImageComponent', () => {
  let component: MoreImageComponent;
  let fixture: ComponentFixture<MoreImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
