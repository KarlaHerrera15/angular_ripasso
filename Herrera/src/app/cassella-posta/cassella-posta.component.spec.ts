import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CassellaPostaComponent } from './cassella-posta.component';

describe('CassellaPostaComponent', () => {
  let component: CassellaPostaComponent;
  let fixture: ComponentFixture<CassellaPostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CassellaPostaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CassellaPostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
