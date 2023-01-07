import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsBackendComponent } from './commits-backend.component';

describe('CommitsBackendComponent', () => {
  let component: CommitsBackendComponent;
  let fixture: ComponentFixture<CommitsBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitsBackendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
