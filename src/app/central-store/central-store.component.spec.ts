import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralStoreComponent } from './central-store.component';

describe('CentralStoreComponent', () => {
  let component: CentralStoreComponent;
  let fixture: ComponentFixture<CentralStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
