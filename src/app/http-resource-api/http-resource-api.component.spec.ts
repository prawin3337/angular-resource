import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpResourceApiComponent } from './http-resource-api.component';

describe('HttpResourceApiComponent', () => {
  let component: HttpResourceApiComponent;
  let fixture: ComponentFixture<HttpResourceApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpResourceApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpResourceApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
