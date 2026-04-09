import { TestBed } from '@angular/core/testing';
import { App } from './app';

fdescribe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ngrx-signals-demo');
  });

   it('shoudl check value chanegd or not',async()=>{
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
      // initial value
    expect(app.value()).toBe('generate');
    app.generate()
    expect(app.value()).toBe('new value');
   })

});
