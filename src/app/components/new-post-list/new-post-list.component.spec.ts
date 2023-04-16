import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostListComponent } from './new-post-list.component';

describe('NewPostListComponent', () => {
  let component: NewPostListComponent;
  let fixture: ComponentFixture<NewPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
