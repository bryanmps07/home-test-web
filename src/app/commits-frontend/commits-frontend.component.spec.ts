import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsFrontendComponent } from './commits-frontend.component';

describe('CommitsFrontendComponent', () => {
  let component: CommitsFrontendComponent;
  let fixture: ComponentFixture<CommitsFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitsFrontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
