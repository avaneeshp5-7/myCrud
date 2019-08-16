import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeMembersComponent } from './become-members.component';

describe('BecomeMembersComponent', () => {
  let component: BecomeMembersComponent;
  let fixture: ComponentFixture<BecomeMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
