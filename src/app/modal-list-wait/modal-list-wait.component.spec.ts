import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListWaitComponent } from './modal-list-wait.component';

describe('ModalListWaitComponent', () => {
  let component: ModalListWaitComponent;
  let fixture: ComponentFixture<ModalListWaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalListWaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
