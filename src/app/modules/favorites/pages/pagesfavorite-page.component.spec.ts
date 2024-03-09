import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesfavoritePageComponent } from './pagesfavorite-page.component';

describe('PagesfavoritePageComponent', () => {
  let component: PagesfavoritePageComponent;
  let fixture: ComponentFixture<PagesfavoritePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesfavoritePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesfavoritePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
